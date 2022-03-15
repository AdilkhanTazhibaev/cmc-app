import './App.css';
import {Route} from 'react-router-dom'
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Routes404 from "./components/Routes404";
function App() {
    return (
    <div className="App">
      <Routes404>
          <Route
              path="/"
              element={
                  <ProtectedRoutes>
                     <HomePage/>
                  </ProtectedRoutes>
              }
          />
          <Route path="/login" element={<AuthPage/>}/>
      </Routes404>
    </div>
  );
}

export default App;
