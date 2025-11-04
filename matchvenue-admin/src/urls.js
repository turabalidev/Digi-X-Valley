// Base URL
const baseUrl = "http://localhost:4000";

// Common APis











// URL to fetch dashboard card count
const Dashboard_Url = `${baseUrl}/api/admin/dashboard`;







//  Privilege
const Privilege_Url  = `${baseUrl}/api/v1/privilege`;

// URL to fetch all Update Privilege
const Privilege_Create = `${baseUrl}/api/v1/privilege/create`;

// URL to fetch all Update Privilege
const Privilege_Update = `${baseUrl}/api/v1/privilege/update`;

// URL to fetch all Delete Privilege
const Privilege_Delete = `${baseUrl}/api/v1/privilege/delete`;










// Service

// URL to fetch all Service
const Service_Url = `${baseUrl}/api/v1/service`;

// URL to fetch all Update Sub_Serivec
const Service_Create = `${baseUrl}/api/v1/service/create`;

// URL to fetch all Update Service
const Service_Update = `${baseUrl}/api/v1/service/update`;

// URL to fetch all Delete Service
const Service_Delete = `${baseUrl}/api/v1/service/delete`;








// Sub_Serivec

// URL to fetch all Sub_Service
const Sub_Service_Url = `${baseUrl}/api/v1/sub-service`;
// URL to fetch all Sub_Service
const Sub_Service_By_Id_Url = `${baseUrl}/api/v1/sub-service/get-by-id`;

// URL to fetch all Create Sub_Service
const Sub_Service_Create = `${baseUrl}/api/v1/sub-service/create`;

// URL to fetch all Update Sub_Service
const Sub_Service_Update = `${baseUrl}/api/v1/sub-service/update`;

// URL to fetch all Status Change Sub_Service
const Sub_Service_Status_Change = `${baseUrl}/api/v1/sub-service/status-change`;

// URL to fetch all Delete Sub_Service
const Sub_Service_Delete = `${baseUrl}/api/v1/sub-service/delete`;











// Project

// URL to fetch all Project
const Project_Url = `${baseUrl}/api/v1/project`;

// URL to fetch all Create Project
const Project_Create = `${baseUrl}/api/v1/project/create`;

// URL to fetch all Update Project
const Project_Update = `${baseUrl}/api/v1/project/update`;

// URL to fetch all Status Change Project
const Project_Status_Change = `${baseUrl}/api/v1/project/change-status`;

// URL to fetch all Delete Project
const Project_Delete = `${baseUrl}/api/v1/project/delete`;










// Appointment

// URL to fetch all Appointment
const Appointment_Url = `${baseUrl}/api/v1/appointment`;

// URL to fetch all Create Project
const Appointment_Create = `${baseUrl}/api/v1/appointment/create`;

// URL to fetch all Update Appointment

const Appointment_Update = `${baseUrl}/api/v1/appointment/update`;

// URL to fetch all Status Change Appointment
const Appointment_Status_Change = `${baseUrl}/api/v1/appointment/update-status`;

// URL to fetch all Delete Appointment
const Appointment_Delete = `${baseUrl}/api/v1/appointment/delete`;













// Amin-User

// URL to fetch all User
const Admin_User_Url = `${baseUrl}/api/admin/users`;

// URL to fetch all Update User
const User_Create = `${baseUrl}/api/v1/User/create`;

// URL to fetch all Update User
const User_Update = `${baseUrl}/api/v1/user/update-profile`;

// URL to fetch all Status Change User
const User_Status_Change = `${baseUrl}/api/v1/User/status-change`;

// URL to fetch all Delete User
const User_Delete = `${baseUrl}/api/v1/User/delete`;

//URL to change user's role 
const User_updateRole = `${baseUrl}/api/v1/user/change-Role`












// Match-Maker

// URL to fetch all Qoutes
const Match_Maker_Url = `${baseUrl}/api/admin/match`;

// URL to fetch all Qoutes
const Qoute_Create = `${baseUrl}/api/v1/Qoute/create`;

// URL to fetch all Update Qoutes
const Qoute_Update = `${baseUrl}/api/v1/Qoute/update`;

// URL to fetch all Status Change Qoutes
const Qoute_Status_Change = `${baseUrl}/api/v1/Qoute/status-change`;

// URL to fetch all Delete Qoutes
const Qoute_Delete = `${baseUrl}/api/v1/Qoute/delete`;








// Authentication
const Logout_Url = `${baseUrl}/api/v1/admin/log-out`
const Login_Url = `${baseUrl}/api/v1/admin/Login`;
const Signup_Url = `${baseUrl}/api/v1/Signup`











// Log
const Log_Url = `${baseUrl}/api/v1/dashboard/get-all-logger`;








// get-user-Id
const User_Id = `${baseUrl}/api/v1/user/get-by-Id`;











// Potential Customer
const Potential_Customer = `${baseUrl}/api/v1/appointment/get-count`









// Alert
const Alert_Url = `${baseUrl}/api/v1/alert/get-alert`
const Ticker_Url = `${baseUrl}/api/v1/alert/get-ticker`
const Alert_Update = `${baseUrl}/api/v1/alert/update`








export {
  baseUrl,


  Dashboard_Url,



  Privilege_Url,
  Privilege_Create,
  Privilege_Update,
  Privilege_Delete,



  Service_Url,
  Service_Create,
  Service_Update,
  Service_Delete,


  Sub_Service_Url,
  Sub_Service_By_Id_Url,
  Sub_Service_Create,
  Sub_Service_Update,
  Sub_Service_Status_Change,
  Sub_Service_Delete,


  Project_Url,
  Project_Create,
  Project_Update,
  Project_Status_Change,
  Project_Delete,



  Appointment_Url,
  Appointment_Create,
  Appointment_Update,
  Appointment_Status_Change,
  Appointment_Delete,


  Admin_User_Url,
  User_Create,
  User_Update,
  User_Status_Change,
  User_Delete,
  User_updateRole,



  Match_Maker_Url,
  Qoute_Create,
  Qoute_Update,
  Qoute_Status_Change,
  Qoute_Delete,



  Logout_Url,
  Login_Url,
  Signup_Url,



  User_Id,


  Log_Url,


  Potential_Customer,
  

  Alert_Url,
  Alert_Update,
  Ticker_Url
};
