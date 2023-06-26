
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"
import Header from "components/headers/light.js";
import BreweryCity from "components/cards/BreweryCity";
import BreweryHero from "components/hero/BreweryHero";
import BreweryCards from "components/cards/BreweryCards";
import tw from "twin.macro";

const HighlightedText = tw.span`bg-pink-700 text-gray-100 px-4 transform -skew-x-12 inline-block`;

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
        heading={<HighlightedText>Featured Breweries</HighlightedText>}
      />
    </div>
  );
}
