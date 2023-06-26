import React, { useContext } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { UserContext } from "../context/UserContext"
import Header from "components/headers/light.js";
import BreweryCity from "components/cards/BreweryCity";
import BreweryHero from "components/hero/BreweryHero";
import BreweryCards from "components/cards/BreweryCards";

export default () => {
  const [userContext, setUserContext] = useContext(UserContext);

  return (
    <AnimationRevealPage>
      {!userContext.token &&
        <BreweryHero>
        </BreweryHero>
      }
      {userContext.token &&
        <>
          <Header />
          <BreweryCity />
        </>
      }
      <BreweryCards
        heading={
          <>
            Top Breweries
          </>
        }
      />
    </AnimationRevealPage>
  );
}
