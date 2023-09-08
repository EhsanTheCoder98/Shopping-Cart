import React from 'react';
import {Route , Switch} from "react-router-dom";
import { Redirect } from 'react-router-dom';

// component
import Shop from './components/Shop';
import Productdetail from './components/Productdetail';

// context
import ContexProviderFile from './context/ContexProviderFile';



const App = () => {
  return (
    <ContexProviderFile>
      <Switch>
        <Route path="/products/:id" component={Productdetail}/>
        <Route path="/products" component={Shop}/>
        <Redirect to="/products"/>
      </Switch>
    </ContexProviderFile>
  );
};

export default App;