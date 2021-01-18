export function triggerGetZomatoCityName (cityName) {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME',
        cityName
    }
}

export function triggerGetZomatoCityNameSuccess (listOfCities) {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME_SUCCESS',
        listOfCities
    }
}

export function triggerGetZomatoCityNameError (error) {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME_ERROR',
        error
    }
}

export function triggerGetRestaurantsFromCity (cityName, cityId,  start=0) {
    return {
        type: 'TRIGGER_GET_ALL_RESTAURANTS',
        cityName, 
        cityId,
        start,
    }
}

export function triggerGetRestaurantsFromCitySuccess (restaurantsList) {
    return {
        type: 'TRIGGER_GET_ALL_RESTAURANTS_SUCCESS',
        restaurantsList
    }
}

export function triggerGetRestaurantsFromCityError (error) {
    return {
        type: 'TRIGGER_GET_ALL_RESTAURANTS_ERROR',
        error
    }
}

export function triggerFilterRestaurants (filterArray) {
    return {
        type: 'TRIGGER_FILTER_RESTAURANTS',
        filterArray
    }
}

export function triggerInsertDisplayedRestaurants (restaurantsList) {
    return {
        type: 'TRIGGER_INSERT_DISPLAYED_RESTAURANTS_LIST',
        restaurantsList
    }
}