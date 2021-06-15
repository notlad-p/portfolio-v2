import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 1.5rem;
  background: none;
  border: none;
`;

const HamburgerIngredient = styled.div`
  width: ${({ isBun }) => isBun ? "100%" : "70%"};
  height: 2px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;

const Hamburger = ({ isOpen }) => {
  return (
    <Container role='button' aria-label={isOpen ? 'Close Menu' : 'Open Menu'} aria-expanded={isOpen ? 'True' : 'False'} >
      <HamburgerIngredient isBun />
      <HamburgerIngredient />
      <HamburgerIngredient isBun />
    </Container>
  )
}

export default Hamburger
