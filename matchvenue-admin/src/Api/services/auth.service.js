import axiosInstance from '../Common/config/axios.config';

export const authService = {
    async register(userData) {
        try {
            const response = await axiosInstance.post('/api/auth/register', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    async login(credentials) {
        try {
            const response = await axiosInstance.post('/api/auth/login', credentials);
            console.log("Login Response::::", response);
            const { accessToken, refreshToken, user } = response.data;
            
            // Store tokens
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));
            
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    async logout() {
        try {
            await axiosInstance.post('/auth/logout');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        } catch (error) {
            console.error('Logout error:', error);
            // Clear local storage even if the API call fails
            localStorage.clear();
        }
    },

    async getCurrentUser() {
        try {
            const response = await axiosInstance.get('/api/auth/me');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },
};