import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

// component
import Shop from "./components/Shop";
import Productdetail from "./components/Productdetail";

// context
import ContexProviderFile from "./context/ContexProviderFile";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <ContexProviderFile>
      <CartContextProvider>
        <Switch>
          <Route path="/products/:id" component={Productdetail} />
          <Route path="/products" component={Shop} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ContexProviderFile>
  );
};

export default App;
