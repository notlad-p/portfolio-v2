import styled from 'styled-components';
import Image from 'next/image';

import Hamburger from './Hamburger';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 96px);
  height: 64px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
`;

const Navbar = () => {
  return (
    <Container role='navigation' >
      <Hamburger />
      <Image src='/dp-logo.png' alt='logo' width={40} height={30} />
    </Container>
  )
}

export default Navbar
