import './App.css';
import { Header } from './header'; 
// import { Footer } from './footer'; 

const App  = () => {
  return (
    <div className="App">
     <div className="Content">
       <Header/>
       <h2>App Component</h2>
       {/* <Footer /> */}
     </div>
    </div>
  );
}

export default App;
