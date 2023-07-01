import { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/react-toastify.css";
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || "{}");

  useEffect(() => {
     dispatch(setUser(user))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path"/" element={<Navigate to"/auth" replace/>} />
        <Route path='/auth' element={<Auth/>}/>
        <Route 
        path='/dashboard' 
        element={<privatRoute/>}/>
        <Dashboard/>
        </privatetRoute>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
