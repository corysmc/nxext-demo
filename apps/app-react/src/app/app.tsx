import React from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';
import { MyComponent } from '@nxext-demo/my-library-react';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to app-react!</h1>
      </header>
      <main>
        <MyComponent first="a Web Component / Custom Element"
          middle="thanks"
          last="to Stencil" />
      </main>
    </div>
  );
};

export default App;
