import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/signup"
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import SendMoney from "./pages/sendMoney";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
   
  );
}

export default App;
