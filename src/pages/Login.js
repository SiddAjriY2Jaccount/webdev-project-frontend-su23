import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/web-beer.png";
import logo from "images/logo.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";


const Container = tw(ContainerBase)`min-h-screen bg-pink-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-pink-700 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-pink-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "/",
  illustrationImageSrc = illustration,
  headingText = "Sign In",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  registerUrl = "/register",

}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [userContext, setUserContext] = useContext(UserContext)

  const formSubmitHandler = e => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const templateErrorMsg = "There was a problem, try again."

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then(async response => {
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!")
          } else if (response.status === 401) {
            setError("Invalid username and password combination.")
          } else {
            setError(templateErrorMsg)
          }
        } else {
          const data = await response.json()
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
          navigate("/");
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        setError(templateErrorMsg)
      })
  }

  if (userContext.token != null) {
    navigate('/');
  }

  return (
    <>
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <Link to={logoLinkUrl}>
                <LogoLink href={logoLinkUrl}>
                  <LogoImage src={logo} />
                </LogoLink>
              </Link>
              <MainContent>
                <Heading>{headingText}</Heading>
                <FormContainer>
                  <Form onSubmit={formSubmitHandler} >
                    <Input
                      type="string"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)} />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
                    <SubmitButton disabled={isSubmitting} type="submit">
                      <SubmitButtonIcon className="icon" />
                      <span className="text">{`${isSubmitting ? "Signing In" : "Sign In"}`}</span>
                    </SubmitButton>
                  </Form>
                  {error && <p tw="mt-6 text-xs text-red-500 text-center">{error}</p>}
                  {/* <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p> */}
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Dont have an account?{" "}
                    <Link to={registerUrl} tw="border-b border-gray-500 border-dotted">
                      Register
                    </Link>
                  </p>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <IllustrationImage imageSrc={illustrationImageSrc} />
            </IllustrationContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    </>
  )
};
