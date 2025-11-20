import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
// import AdminDashboard from "../components/AdminDashboard";
import MemberList from "../components/MemberList";


function FrontPage() {
  return (
    <>
      <Home />
      <MemberList />
      <Login />
      <Signup />
    </>
  );
}

export default FrontPage;
