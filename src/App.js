import logo from './logo.svg';
import './App.module.scss';
import HomePage from './components/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const  App=()=> {
  const [selectedStep,setSelectedStep] = useState(1);
 
  return (
    <Container className="App">
      <Header setSelectedStep ={setSelectedStep} selectedStep={selectedStep} />
      <HomePage setSelectedStep ={setSelectedStep} selectedStep={selectedStep}/>
      <Footer />
    </Container>
  );
}

export default App;
