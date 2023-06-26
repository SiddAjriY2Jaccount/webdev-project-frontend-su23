import React from "react";
import tw from "twin.macro";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
function AnimationReveal({ disabled, children }) {
    return <>{children}</>;
}

export default props => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
