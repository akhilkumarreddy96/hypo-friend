import logo from './logo.svg';
import './App.module.scss';
import HomePage from './components/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const  App=()=> {
  const [selectedStep,setSelectedStep] = useState(1);
  window.__be = window.__be || {};
    window.__be.id = "60e370bc11e3ef000707f6c8";
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    
  return (
    <Container className="App">
      <Header setSelectedStep ={setSelectedStep} selectedStep={selectedStep} />
      <HomePage setSelectedStep ={setSelectedStep} selectedStep={selectedStep}/>
      <Footer />
      
    </Container>
  );
}

export default App;
