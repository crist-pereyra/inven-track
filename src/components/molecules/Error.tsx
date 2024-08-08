import styled from 'styled-components';

export const Error = ({ message }: { message: string }) => {
  return (
    <Container>
      <span>Error... {message}</span>
    </Container>
  );
};
const Container = styled.div`
  color: ${({ theme }) => theme.text};
`;
