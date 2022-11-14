import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { User } from '@nx-rocks/types';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="web-admin" />
    </StyledApp>
  );
}

export default App;
