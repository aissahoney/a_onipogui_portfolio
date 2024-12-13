import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
function App() {
  return (
    <>
     <Header/>
     <main className='main'>
     <Home/>
     <Skills/>
     <Work/>
     </main>
     <Footer/>
    </>
  );
}

export default App;
