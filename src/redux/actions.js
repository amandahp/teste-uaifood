export function triggerGetZomatoCityName () {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME'
    }
}

export function triggerGetZomatoCityNameSuccess (cityname) {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME_SUCCESS'
    }
}

export function triggerGetZomatoCityNameError (error) {
    return {
        type: 'TRIGGER_GET_ZOMATOCITYNAME_ERROR'
    }
}