import React from 'react';

// component
import Shop from './components/Shop';

// context
import ContexProviderFile from './context/ContexProviderFile';



const App = () => {
  return (
    <ContexProviderFile>
      <Shop />
    </ContexProviderFile>
  );
};

export default App;