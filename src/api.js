import axios from 'axios';


const API_URL = 'https://server-cms-avst.onrender.com/api';


const api = axios.create({
  baseURL: API_URL,
});


export const getProjects = () => api.get('/projects');
export const getClients = () => api.get('/clients');


export const submitContactForm = (formData) => api.post('/contact', formData);
export const submitSubscription = (emailData) => api.post('/subscribe', emailData);

export default api;