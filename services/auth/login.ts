import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

const url = process.env.API_URL
// Function for logging in the user
export const loginUser = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${url}/login`, {
      email: loginData.email,
      password: loginData.password,
    });

    // Return the response data if the login is successful
    return response.data;
  } catch (error) {
    // Handle any errors that occur during login
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    } else {
      throw new Error('An unknown error occurred during login');
    }
  }
};
