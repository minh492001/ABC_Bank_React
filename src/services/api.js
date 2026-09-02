import axios from 'axios';

const API_BASE_URL = "https://localhost:8090/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {  
        'Content-Type': 'application/json'
    },
});

// Add token to requests if available 
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// API methods
export const apiService = {
    saveAuthData:(token, roles) => {
        localStorage.setItem('token', token)
        localStorage.setItem('roles', JSON.stringify(roles))
    },
    logOut:() => {
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
    },
    hasRole:(role) => {
        const roles = localStorage.getItem('roles')
        return roles ? JSON.parse(roles).includes(role) : false
    },
    isAuthenticated:() => {
        return localStorage.getItem('token') !== null;
    },
    isAdmin() { // Check if user is an admin
        return this.hasRole('ADMIN')
    },
    isCustomer() { // Check if user is a customer
        return this.hasRole('CUSTOMER')
    },
    isAuditor() { // Check if user is an auditor
        return this.hasRole('AUDITOR')
    },
}

export default api