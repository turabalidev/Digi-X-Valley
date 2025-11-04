import axiosInstance from '../../Common/config/axios.config';

export const Get_Reports_Data = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/api/reports', { params });
    return response.data;
  } catch (error) {
    console.error('Get_Reports_Data error:', error);
    throw error;
  }
};

export const Update_Report_Status = async (reportId, status) => {
  try {
    const response = await axiosInstance.patch(`/reports/${reportId}/status`, { status });
    return response.data;
  } catch (error) {
    console.error('Update_Report_Status error:', error);
    throw error;
  }
};

export const Delete_Report = async (reportId) => {
  try {
    const response = await axiosInstance.delete(`/reports/${reportId}`);
    return response.data;
  } catch (error) {
    console.error('Delete_Report error:', error);
    throw error;
  }
};