import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import getZomatoCityName  from '../services/getZomatoDataCity'
import {getRestaurantsFromCity} from '../services/getRestaurants'
import { triggerGetZomatoCityNameSuccess, triggerGetZomatoCityNameError , triggerGetRestaurantsFromCitySuccess, triggerGetRestaurantsFromCityError, triggerInsertDisplayedRestaurants} from './actions'

const getOriginalRestaurantsList = state => state.restaurantList

export function* fetchZomatoDataCity({cityName}) {
	try {
        const data = yield call(getZomatoCityName, cityName)
		yield put(triggerGetZomatoCityNameSuccess(data))
	} catch(err) {
		yield put(triggerGetZomatoCityNameError(err))
	}
}

export function* fetchAllRestaurants({cityId, start}) {
	try {
		const data = yield call(getRestaurantsFromCity, cityId, start)
		yield put(triggerGetRestaurantsFromCitySuccess(data))
	}catch(err) {
		yield put(triggerGetRestaurantsFromCityError(err))
	}
} 


export function* filterRestaurantsByType({ filterArray }) {
	const originalRestaurantsList = yield select(getOriginalRestaurantsList) 
	if (filterArray.length) {
		const filteredRestaurants = originalRestaurantsList.filter(restaurant => filterArray.includes(restaurant.restaurant.cuisines.slice(0, restaurant.restaurant.cuisines.indexOf(','))))
		yield put(triggerInsertDisplayedRestaurants(filteredRestaurants))
		localStorage.setItem('restaurantsList', JSON.stringify(filteredRestaurants))
	}else {
		yield put(triggerInsertDisplayedRestaurants(originalRestaurantsList))
		localStorage.setItem('restaurantsList', originalRestaurantsList)

	}
}

export default function* rootSaga() {
	yield takeLatest('TRIGGER_GET_ZOMATOCITYNAME', fetchZomatoDataCity);
	yield takeLatest('TRIGGER_GET_ALL_RESTAURANTS', fetchAllRestaurants);
	yield takeLatest('TRIGGER_FILTER_RESTAURANTS', filterRestaurantsByType)
	
} 
