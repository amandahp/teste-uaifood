import axios from 'axios'

const getZomatoCityName = async (cityname) => {
    const headers = {
        'user-key': 'b34931e5fc8431e4b668a6b5ad45e95c'
    }
    const requestUrl = `https://developers.zomato.com/api/v2.1/cities?q=${cityname}`;
    const response = await axios.get(requestUrl, {headers})
    console.log('response', response)
    return 	response
}

export default getZomatoCityName