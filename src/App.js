import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
  
   <Navbar title = "TextUtils"  />
   <div className="container my-5 ">
   <Textform heading = "Enter your text here to analyze below"/>
   </div>
   
   </>
  );
}

export default App;
