import decode from 'jwt-decode';
// import { useLocalStorage } from './useLocalStorage';

export const decodeToken = () => {
  const token = localStorage.getItem('token');
  const info = token ? decode(token) : null; // If token in Local Storage decode else return null
  return info;
};

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};