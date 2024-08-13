import axios from 'axios';

const APP_ID = '9df1a3a3';
const API_KEY = 'fcf800b3e6bcfbc790ba4c61e6577b56';

const baseUrl = 'https://api.edamam.com/search';

export const fetchRecipes = async (query) => {

    try {
        const response = await axios.get(baseUrl, {
            params: {
                q: query,
                app_id : APP_ID,
                app_key : API_KEY
            },
        });
        return response.data.hits;
    }catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}