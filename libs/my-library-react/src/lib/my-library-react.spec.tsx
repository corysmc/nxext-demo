import React from 'react';
import { render } from '@testing-library/react';

import MyLibraryReact from './my-library-react';

describe(' MyLibraryReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibraryReact />);
    expect(baseElement).toBeTruthy();
  });
});
