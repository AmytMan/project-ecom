import Login from "./pages/Login"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from "react-bootstrap";


function App() {
 

  return (
    <div className="App">
      < Header/>
      <Login />
      <Footer/>
       
    </div>
  )
}

export default App
