import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1000px;
  margin: 64px auto;

  @media (max-width: 1050px) {
    max-width: 600px;
  };

  @media (max-width: 650px) {
    max-width: 400px;
  };

  @media (max-width: 450px) {
    max-width: 300px;
  };
`;

export default SectionContainer;