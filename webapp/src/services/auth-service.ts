import axios from 'axios';
import { jwtDecode } from "jwt-decode"; 

const API_URL = 'http://localhost:8002';

type JwtPayload = {
  username: string;
  userEmail: string;
  questions_answered: number;
  correctly_answered_questions: number;
};

export const login = async (username: string, password: string)=> {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const token = response.data.token;
    console.log('token:', token);
    localStorage.setItem('token', token); // store the token in local storage
    return true;
  } catch (error) {
    console.error('Error during login:', error);
    return false;
  }
};

export const register = async (email:string, username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password, email });
    const token = response.data.token;
    localStorage.setItem('token', token); // store the token in local storage
    return token;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const isLogged = () => {
  const token = localStorage.getItem('token');
  return !!token; 
};

export const logout = () => {
  localStorage.removeItem('token'); 
};

export const getTokenInfo = (): JwtPayload | null => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwtDecode(token);
    if (typeof decodedToken === 'object' && decodedToken !== null) {
      return decodedToken as JwtPayload;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error during token decoding:', error);
    return null;
  }
};
  
  export const getUsername = () => {
    const tokenInfo = getTokenInfo();
    return tokenInfo ? tokenInfo.username : null;
  };
  
  export const getUserEmail = () => {
    const tokenInfo = getTokenInfo();
    return tokenInfo ? tokenInfo.userEmail : null;
  };
  
  export const getQuestionsAnswered = () => {
    const tokenInfo = getTokenInfo();
    return tokenInfo ? tokenInfo.questions_answered : null;
  };
  
  export const getCorrectlyAnsweredQuestions = () => {
    const tokenInfo = getTokenInfo();
    return tokenInfo ? tokenInfo.correctly_answered_questions : null;
  };
