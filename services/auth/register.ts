import axios from 'axios';

interface RegisterResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

const url = process.env.API_URL;
export const registerUser = async (registerData: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await axios.post(`${url}/register`, {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    } else {
      throw new Error('An unknown error occurred during registration');
    }
  }
};
