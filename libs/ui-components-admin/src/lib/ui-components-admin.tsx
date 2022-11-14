import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsAdminProps {}

const StyledUiComponentsAdmin = styled.div`
  color: pink;
`;

export function UiComponentsAdmin(props: UiComponentsAdminProps) {
  return (
    <StyledUiComponentsAdmin>
      <h1>Welcome to UiComponentsAdmin!</h1>
    </StyledUiComponentsAdmin>
  );
}

export default UiComponentsAdmin;
