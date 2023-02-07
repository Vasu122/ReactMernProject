import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import UserDetail from './components/userDetail';
import UpdateProducts from './components/updateProducts';
import SignUp from './components/SignUp';
import UserList from "./components/userList";
import SkillAdd from "./components/skillsAdd";
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/UserDetail/:id" element={<UserDetail />} />
            <Route path="/edit/:id" element={<UpdateProducts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/userList" element={<UserList />} />
            <Route path="/skilladd" element={<SkillAdd />} />

            
      </Routes>
    </div>
  );
}

export default App;
