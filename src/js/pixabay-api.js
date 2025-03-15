
import axios from 'axios';

const API_KEY = '49358433-5727c4bf05d17bed3943eaf07'; 

export const fetchImages = async (searchQuery) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
