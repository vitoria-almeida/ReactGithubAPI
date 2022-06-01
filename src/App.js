import React from 'react';
import Routess from './routes'

import * as STYLE from './repo/styled'

function App(props) {
  return (
    <>
      <STYLE.Title>{props.title}</STYLE.Title>
      <Routess />
    </>
  );
}

export default App;
