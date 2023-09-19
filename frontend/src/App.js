import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserList from "./Component/UserList";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
