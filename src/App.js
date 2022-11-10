import './App.css';
import SlackPublicRoutes from './routes/router';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <SlackPublicRoutes/>
        </BrowserRouter>

 
  );
}

export default App;
