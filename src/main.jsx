import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
// import auth from "./pages/auth"
import "./assets/css/main.css";
import Routing from "./config/routing.config";




  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
    
  </StrictMode>
)