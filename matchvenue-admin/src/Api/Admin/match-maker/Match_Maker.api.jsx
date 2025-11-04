import { Match_Maker_Url } from "../../../urls";

export const Get_Match_Maker_Data = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token in Dashboard API::::", token);
    
    if (!token) {
        throw new Error("Unauthorized: No token found in localStorage");
    }

    // const response = await fetch(`${baseUrl}/api/v1/dashboard/count`, {
    const response = await fetch(`${Match_Maker_Url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

// console.log("response in Match Maker API::::", response);
if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data;
      } else {
        throw new Error("API returned unsuccessful response.");
      }
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
  } catch (error) {
    console.error("[Match Maker API Error]:", error.message);
    return { 
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};
