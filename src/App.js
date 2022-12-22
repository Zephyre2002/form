// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./forms/Login"
import Create from './forms/Create';
import Password from './forms/Password';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='' >
      
      {/* <Create />
      <Password /> */}

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/create" element={<Create/>} />
        <Route exact path="/password" element={<Password/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
