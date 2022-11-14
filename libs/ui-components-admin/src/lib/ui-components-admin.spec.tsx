import { render } from '@testing-library/react';

import UiComponentsAdmin from './ui-components-admin';

describe('UiComponentsAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponentsAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
