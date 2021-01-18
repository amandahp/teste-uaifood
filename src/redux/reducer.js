export const initialState = {
    loading:false,
    error:false,
    citylist:[],
    cityId: '',
    restaurantList: [],
    cityName: '',
    displayedRestaurantsList: []
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case 'TRIGGER_GET_ZOMATOCITYNAME':
            return {...state, loading:true}
        case 'TRIGGER_GET_ZOMATOCITYNAME_SUCCESS':
            return {...state, loading:false, citylist:action.listOfCities}
        case 'TRIGGER_GET_ZOMATOCITYNAME_ERROR':
            return {...state, loading:false, error: action.error}
        case 'TRIGGER_GET_ALL_RESTAURANTS':
            return {...state, cityId: action.cityId, cityName:action.cityName, loading: true}
        case 'TRIGGER_GET_ALL_RESTAURANTS_SUCCESS':
            return {...state, restaurantList: action.restaurantsList, displayedRestaurantsList: action.restaurantsList,  loading: false}
        case 'TRIGGER_GET_ALL_RESTAURANTS_ERROR':
            return {...state, error:action.error}
        case 'TRIGGER_INSERT_DISPLAYED_RESTAURANTS_LIST':
            return {...state, displayedRestaurantsList: action.restaurantsList}
        default:
            return state
    }
}

