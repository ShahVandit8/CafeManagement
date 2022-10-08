import './App.css';
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Sidebar from './components/Dashboard-Components/Sidebar'
import Main from './components/Dashboard-Components/Main'
import Topbar from './components/Dashboard-Components/Topbar'
import StaffManagement from './components/Dashboard-Components/StaffManagement'
import EditStaff from './components/Dashboard-Components/EditStaff'
import AddStaff from './components/Dashboard-Components/AddStaff';
import AddFoodCategory from './components/Dashboard-Components/AddFoodCategory'
import FoodCategory from './components/Dashboard-Components/FoodCategory'
import EditFoodCategory from './components/Dashboard-Components/EditFoodCategory'
import FoodItemMenu from './components/Dashboard-Components/FoodItemMenu'
import AddFoodItem from './components/Dashboard-Components/AddFoodItem'
import EditFoodItem from './components/Dashboard-Components/EditFoodItem'
import HeadChefDashboard from './components/HeadChefDashboard'
import HomePage from './components/Dashboard-Components/HomePage'
import Error from './components/Dashboard-Components/error'
import TableManagement from './components/Dashboard-Components/TableManagement'
import ConfigureTable from './components/Dashboard-Components/ConfigureTable';
import FoodOrder from './components/FoodOrder';
import EditTable from './components/Dashboard-Components/EditTable'






import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route path="menu/table/:id" element={<FoodOrder/>} />
        <Route path="dashboard" element={<Dashboard/>}>
          <Route path="employee" element={<StaffManagement />} />
          <Route path="editemployee/:id" element={<EditStaff />} />
          <Route path="addemployee" element={<AddStaff />} />
          <Route path="fooditemcategory" element={<FoodCategory />} />
          <Route path="addfoodcategory" element={<AddFoodCategory />} />
          <Route path="editfoodcategory/:id" element={<EditFoodCategory />} />
          <Route path="fooditemmenu" element={<FoodItemMenu />} />
          <Route path="addfooditem" element={<AddFoodItem />} />
          <Route path="editfooditem/:id" element={<EditFoodItem />} />
          <Route path="tablemanagement" element={<TableManagement />} />
          <Route path="configuretable" element={<ConfigureTable />} />
          <Route path="edittabledetails/:id" element={<EditTable />} />
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<Error />} />

        </Route>
        <Route path="*" element={<Error />} />
        <Route path="headchefdashboard" element={<HeadChefDashboard/>} />
        <Route exact path="/" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
