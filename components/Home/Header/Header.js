import styled from "styled-components";

import HeaderContent from "./HeaderContent";

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Header = () => {
  return (
    <Container>
      {/* <Canvas /> */}
      <HeaderContent />
    </Container>
  );
};

export default Header;
