import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

const App = (props) => {
  return (
    <>
      <h3>App Component</h3>
      <hr />
      <Navbar />
      <Container message='Good afternoon' />
    </>
  );
};

export default App;
