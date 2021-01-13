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