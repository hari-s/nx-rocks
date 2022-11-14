import { render } from '@testing-library/react';

import UiComponentsDocs from './ui-components-docs';

describe('UiComponentsDocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponentsDocs />);
    expect(baseElement).toBeTruthy();
  });
});
