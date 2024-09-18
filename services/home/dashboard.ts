import axios from 'axios';

export interface ListItem {
  id: string;
  title: string;
  description: string;
}

export interface UserDetails {
  id: string;
  name: string;
  email: string;
}

const url = process.env.API_URL;
export const getListItems = async (): Promise<ListItem[]> => {
  try {
    const response = await axios.get(`${url}/list-items`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch list items');
    } else {
      throw new Error('An unknown error occurred while fetching list items');
    }
  }
};

export const getUserDetails = async (userId: string): Promise<UserDetails> => {
  try {
    const response = await axios.get(`${url}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user details');
    } else {
      throw new Error('An unknown error occurred while fetching user details');
    }
  }
};
