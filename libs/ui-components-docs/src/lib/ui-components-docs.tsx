import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsDocsProps {}

const StyledUiComponentsDocs = styled.div`
  color: pink;
`;

export function UiComponentsDocs(props: UiComponentsDocsProps) {
  return (
    <StyledUiComponentsDocs>
      <h1>Welcome to UiComponentsDocs!</h1>
    </StyledUiComponentsDocs>
  );
}

export default UiComponentsDocs;
