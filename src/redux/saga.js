import { call, put, takeLatest } from 'redux-saga/effects';
import { getZomatoCityName } from '../services/getZomatoDataCity'
import { triggerGetZomatoCityNameSuccess, triggerGetZomatoCityNameError} from './actions'

export function* fetchZomatoDataCity() {
	try {
		const data = yield call(getZomatoCityName)
		yield put(triggerGetZomatoCityNameSuccess(data))
	} catch(err) {
		yield put(triggerGetZomatoCityNameError(err))
		console.log(err)
	}
}
