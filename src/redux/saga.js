import { call, put, takeLatest } from 'redux-saga/effects';
import getZomatoCityName  from '../services/getZomatoDataCity'
import { triggerGetZomatoCityNameSuccess, triggerGetZomatoCityNameError} from './actions'



export function* fetchZomatoDataCity({cityName}) {
	try {
        const data = yield call(getZomatoCityName, cityName)
        console.log(data)
		yield put(triggerGetZomatoCityNameSuccess(data))
	} catch(err) {
		yield put(triggerGetZomatoCityNameError(err))
		console.log(err)
	}
}

export default function* rootSaga() {
	yield takeLatest('TRIGGER_GET_ZOMATOCITYNAME', fetchZomatoDataCity);
} 
