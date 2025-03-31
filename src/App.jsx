import './App.css';
import BussinessOwnerForm from './Components/BusinessOwnerDetail';
import MotelDetails from './Components/MotelDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRooms from './Components/AddRooms';

function App() {

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
    //   <BussinessOwnerForm />
    //   <MotelDetails />
    // </div>
     <Router>
     <Routes>
       <Route path="/" element={<BussinessOwnerForm />} />
       <Route path="/add-rooms" element={<AddRooms />} />
     </Routes>
   </Router>
  );
}

export default App
