import React, {Component} from 'react';
import Routes from './src/routes';
import {ContextStore} from './src/store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ContextStore comp={<Routes />} />
      </>
    );
  }
}

export default App;
