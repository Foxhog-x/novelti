// import {Users} from "./Components/Users"

 
import RegisterPage from "./pages/RegisterPage";
import { DisplayUsers } from "./Components/DisplayUsers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <div>
 
 
      
        <RegisterPage />
        <DisplayUsers />
    
    
   </div>
  );
}

export default App;
