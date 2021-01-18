import axios from 'axios'

export const getRestaurantsFromCity = async (cityId, start) => {
    const headers = {
        'user-key': 'b34931e5fc8431e4b668a6b5ad45e95c'
    }
    const requestUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${start}&count=20`;
    const response = await axios.get(requestUrl, {headers})
    return response.data.restaurants
}

