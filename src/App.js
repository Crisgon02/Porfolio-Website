
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/Navbar";
import {Banner} from "./components/Banner"; 
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import {Languages} from "./components/Languages";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner/>
      <Skills/><br></br>
      <Languages/><br></br>
      <Projects/>
    </div>
  );
}

export default App;
