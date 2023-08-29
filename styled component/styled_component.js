// 安裝
//yarn add styled-components

//import
import styled from "styled-components";

import React from 'react';

const StyledDiv = styled.div`
  background-color: pink;
`;
// const StyledDiv = styled.div({
//   backgroundColor: 'pink',
// });
// const Input = styled('input')({
//   opacity: 0,
//   position: 'absolute',
//   left: 0,
//   right: 0,
// });



function App() {
  return (
    <StyledDiv>
      <h1>Welcome to Styled Components</h1>
    </StyledDiv>
  );
}

export default App;
