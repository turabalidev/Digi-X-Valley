import axiosInstance from "../../Common/config/axios.config";

// Get all plans
export const Get_All_Plans = async (type = "") => {
  try {
    const response = await axiosInstance.get(`/api/subscriptions?type=${type}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get active subscriptions with filters
export const Get_Active_Subscriptions = async (params) => {
  try {
    const response = await axiosInstance.get("/api/subscriptions/active", { params });
    
    // Ensure consistent response format
    if (Array.isArray(response.data)) {
      return {
        success: true,
        data: response.data,
        total: response.data.length
      };
    }
    
    return {
      success: true,
      data: response.data?.data || response.data?.items || [],
      total: response.data?.total || response.data?.data?.length || 0
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      data: [],
      total: 0,
      error: error.message
    };
  }
};

// Update matches per week for a plan
export const Update_Plan_Matches = async (plan, matches_per_week) => {
  try {
    const response = await axiosInstance.patch("/api/subscriptions/matches-per-week", {
      plan,
      matches_per_week,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get subscription analytics - calculated from active subscriptions
export const Get_Subscription_Analytics = async () => {
  try {
    const response = await axiosInstance.get("/api/subscriptions/active", {
      params: {
        limit: 1000, // Get a large number to calculate accurate stats
        includeExpired: true,
        includeCancelled: true
      }
    });

    // Ensure we have an array of subscriptions
    let subscriptions = [];
    if (Array.isArray(response.data)) {
      subscriptions = response.data;
    } else if (Array.isArray(response.data?.data)) {
      subscriptions = response.data.data;
    } else if (Array.isArray(response.data?.items)) {
      subscriptions = response.data.items;
    }
    
    // Initialize stats
    const stats = {
      activePlans: 0,
      expiredPlans: 0,
      cancelledPlans: 0,
      totalRevenue: 0
    };

    // Calculate stats by iterating through the array
    subscriptions.forEach(sub => {
      // Count by status
      if (sub.is_active) stats.activePlans++;
      else if (sub.status === 'cancelled') stats.cancelledPlans++;
      else stats.expiredPlans++;

      // Sum up revenue - assuming plan_price is in the subscription data
      if (sub.plan_price) {
        stats.totalRevenue += parseFloat(sub.plan_price) || 0;
      }
    });

    return {
      success: true,
      data: stats
    };
  } catch (error) {
    throw error;
  }
};