import './App.css';
import { Header } from './header'; 
import { Footer } from './footer'; 
import { Body } from './body'; 

const App  = () => {
  return (
    <div className="App">
     <div className="Content">
       <Header/>
       <Body />
       <Footer />
     </div>
    </div>
  );
}

export default App;
