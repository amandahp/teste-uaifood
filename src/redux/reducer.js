export const initialState = {
    loading:false,
    error:false,
    citylist:[],
}

export default function Reducer(state=initialState, action){
    switch(action.type){
        case 'TRIGGER_GET_ZOMATOCITYNAME':
            return {...state, loading:true}
        case 'TRIGGER_GET_ZOMATOCITYNAME_SUCCESS':
            return {...state, loading:false, citylist:action.listOfCities}
        case 'TRIGGER_GET_ZOMATOCITYNAME_ERROR':
            return {...state, loading:false, error: action.error}
        default:
            return state
    }
}

