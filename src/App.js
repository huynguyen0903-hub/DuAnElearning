import { Switch, Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import { Home } from "./pages";
import AddNew from "./pages/Admin/Courses/AddNew/AddNew";
import Courses from "./pages/Admin/Courses/Courses";
import Edit from "./pages/Admin/Courses/Edit/Edit";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";


function App() {
  const history = useHistory();
  return (
    
      <Router history={history}>
        <Switch>
        <AdminTemplate exact path="/admin/users"  Component={Dashboard} />
        <AdminTemplate exact path="/admin/courses"  Component={Courses} />
        <AdminTemplate exact path="/admin/courses/addnew" Component={AddNew} />
        <AdminTemplate exact path="/admin/courses/edit/:id" Component={Edit} />
        <AdminTemplate exact path="/admin"  Component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
