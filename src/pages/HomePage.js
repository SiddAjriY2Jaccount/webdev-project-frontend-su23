
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"
import Header from "components/headers/light.js";
import BreweryCity from "components/cards/BreweryCity";
import BreweryHero from "components/hero/BreweryHero";
import BreweryCards from "components/cards/BreweryCards";

export default () => {
  const [currUser] = useContext(UserContext);

  return (
    <div>
      {!currUser.token &&
        <BreweryHero />
      }
      {currUser.token &&
        <>
          <Header />
          <BreweryCity />
        </>
      }
      <BreweryCards
        heading={<>Featured Breweries</>}
      />
    </div>
  );
}
