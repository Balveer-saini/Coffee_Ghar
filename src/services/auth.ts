import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    fullName: string;
    email: string;
  };
}

const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { token, user } = response.data;
    setAuthToken(token);
    return { token, user };
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    const { token, user } = response.data;
    setAuthToken(token);
    return { token, user };
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export const logout = () => {
  setAuthToken('');
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    setAuthToken(token);
    const response = await axios.get(`${API_URL}/user/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
};