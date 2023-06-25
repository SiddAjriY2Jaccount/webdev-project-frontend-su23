// import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
// import { Link } from "react-router-dom";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-pink-700`}
//   }
// `;
// const Container = styled.div`
//   ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
//   background-image: url("https://images.unsplash.com/photo-1658836019458-79356c390c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
// `;

// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-pink-700 opacity-25`;

// const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
// const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
// const LeftColumn = tw.div`flex flex-col items-center lg:block`;
// const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

// const Heading = styled.h1`
//   ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
//   span {
//     ${tw`inline-block mt-2`}
//   }
// `;

// const SlantedBackground = styled.span`
//   ${tw`relative text-pink-700 px-4 -mx-4 py-2`}
//   &::before {
//     content: "";
//     ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
//   }
// `;

// const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-pink-700 font-bold rounded shadow transition duration-300 hocus:bg-pink-700 hocus:text-gray-100 focus:shadow-outline`;

// export default () => {
//     return (
//         <Container>
//             <OpacityOverlay />
//             <HeroContainer>
//                 <StyledHeader />
//                 <TwoColumn>
//                     <LeftColumn>
//                         <Heading>
//                             <SlantedBackground>A one-stop shop for breweries in your city</SlantedBackground>
//                         </Heading>
//                         <Link to="/register">
//                             <PrimaryAction>Register</PrimaryAction>
//                         </Link>
//                     </LeftColumn>
//                     <RightColumn>
//                     </RightColumn>
//                 </TwoColumn>
//             </HeroContainer>
//         </Container>
//     );
// };

import React from "react";
import { Link } from "react-router-dom";
import Header, {
  NavLink,
  DesktopNavLinks,
} from "../headers/light.js";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as Insta } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as Facebook } from "feather-icons/dist/icons/facebook.svg";
import { ReactComponent as Twitter } from "feather-icons/dist/icons/twitter.svg";

const StyledHeader = styled(Header)`
  <${tw`pt-8 max-w-none`}>
  ${DesktopNavLinks} ${NavLink} {
    ${tw`text-black hover:border-gray-300 hover:text-white`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.pexels.com/photos/5537785/pexels-photo-5537785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const SingleColumn = tw.div`pt-24 pb-8 px-4 flex justify-center items-center flex-col`;
const Buttons = tw.div`flex`;
const ButtonLink = styled(Link)`
  ${tw`px-4 py-2 text-black bg-white text-black border border-black font-sans uppercase mr-4`}
`;
const Caption = styled.div`
  ${tw`leading-none absolute inline-flex inline-grid gap-2 bg-white text-black border border-black bottom-0 right-0 px-5 py-2`}
  grid-template-columns: repeat(4, auto);
`;
const Heading = styled.h1`
  ${tw`text-3xl lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white`} font-family: cursive
`;


export default () => {
  return (
    <Container>
      <HeroContainer>
        <StyledHeader />
        <SingleColumn>
          <Heading>
          <Link to="/">
              <span>BREWCRITIC</span>
            </Link>
            <span><br /> Brewery reviews on fingertips <br /> &nbsp;</span>
          </Heading>
          <Buttons>
            <ButtonLink to="/login">Log In</ButtonLink>
            <ButtonLink to="/register">Sign Up</ButtonLink>
          </Buttons>
        </SingleColumn>
        <SingleColumn>
          <Caption>Follow us on  <Insta /> <Facebook /> <Twitter /> </Caption> 
        </SingleColumn>
      </HeroContainer>
    </Container>
  );
};
