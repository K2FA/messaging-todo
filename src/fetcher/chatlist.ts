import axios from 'axios';

const API_BASE_URL = 'https://7a3a34d5-76ec-4090-86f7-1a34671671ec.mock.pstmn.io';

export const fetchChatlist = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/chat-list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
