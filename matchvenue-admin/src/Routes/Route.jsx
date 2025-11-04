import { createBrowserRouter, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";

//Authentication
// import Login from "../components/admin/auth/login/Login";
// import Signup from "../components/admin/auth/signup/Signup";

// Layouts
// import Main from "../Layout/User/User.Layout";
// import Admin from "../Layouts/Admin/Admin.Layout";

// Common Page
// import NotFound from "../Pages/Common/Not_Found.Page";

// User Pages
// import Home from "../Pages/User/Home.Page";
// import AboutUs from "../Pages/User/About_Us.Page";
// import Contactus from "../Pages/User/Contactus.Page";
// import PolicyPage from "../Pages/User/Policy.Page";

//Multi page

// import Services from "../Pages/User/Services.Page";
// import SubServices from "../Pages/User/Common/Sub_Services.Page";

// import ProjectsPage from "../Pages/User/Projects.Page";
// import ProjectDetails from "../Components/User/Projects/ProjectDetails.component";

// // Admin Panel
import Admin from "../Layouts/Admin/Admin.Layout.jsx"
import Dashboard from "../Pages/Admin/Dashboard.page.jsx";
import User from "../Pages/Admin/User.page.jsx";
import Matches from "../Pages/Admin/AdminMatches.page.jsx";
import Reports from "../Pages/Admin/Reports.page.jsx";
import Subscription from "../Pages/Admin/Subscription.paga.jsx";
import Venue from "../Pages/Admin/Venue.page.jsx";
import ContentLegalPage from "../Pages/Admin/contentLegal.page.jsx";
import AdminSettings from "../Pages/Admin/AdminSettings.page.jsx";
import Analytics from "../Pages/Admin/Analytics.jsx";

// import UserManagement from "../Pages/Admin/UserManagement.page.jsx";
// import Appointments from "../Pages/Admin/Appointments.page.jsx";
// import Logs from "../Pages/Admin/Logs.page.jsx";
// import Privilege from "../Pages/Admin/Privilege.page.jsx";
// import Projects from "../Pages/Admin/Projects.page.jsx";
// import ServiceManagement from "../Pages/Admin/Services_Management.page.jsx"
// authenticaton routes
// import SignUpPage from "../Pages/Admin/SignUp.Page";
// import LoginPage from "../Pages/Admin/Login.Page";
// import Forgot_Password from "../Pages/Admin/Forgot_Password.page";
// import ProtectedRoute from "../Components/Admin/Common/ProtectedRoute.common.jsx";
// import EmailVerificationPage from "../Pages/Admin/EmailVerification.Page"


const Router = createBrowserRouter([

  // Admin => authentication pages

  //   {
  //     path: "/admin/signup",
  //     element: <SignUpPage />,
  //   },
  //   {
  //     path: "/admin/login",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/admin/forgetpassword",
  //     element: <Forgot_Password />,
  //   },

  // // Admin Panel

  {
    path: "",
    element: (
      //   <ProtectedRoute>
      <Admin />
      //   </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element:
          <Dashboard />
      },
       {
         path: "users",
         element: <User />,
       },
       {
         path: "matches",
         element: <Matches />
       },
       {
         path: "reports",
         element: <Reports/>
       },
       {
         path: "subscriptions",
         element: <Subscription/>
       },
       {
         path: "analytics",
         element: <Analytics/>
       },
       {
         path: "venues",
         element: <Venue/>
       },
       {
         path: "contentLegal",
         element: <ContentLegalPage/>
       },
       {
         path: "adminSettings",
         element: <AdminSettings/>
       },
      // venues
      // legal
    ],
  },

  // 404
  {
    path: "*",
    // element: <NotFound />,
    element: <h1>Page Not Found!</h1>,
  },
]);

export default Router;
