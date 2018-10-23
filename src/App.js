import React, { Component } from 'react';
import LayoutIce from './hoc/LayoutIce/LayoutIce';
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <LayoutIce>
          <IceCreamBuilder/>
        </LayoutIce>
      </div>
    );
  }
}

export default App;
