import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import BrewerySearch from "components/cards/BrewerySearch";

export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <BrewerySearch
                heading={
                    <>
                        Search for Breweries
                    </>
                }
            />
        </AnimationRevealPage>
    );
}
