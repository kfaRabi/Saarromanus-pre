import { takeEvery, put, call } from 'redux-saga/effects';
import * as Localization from 'expo-localization';

import { DETECT_LANGUAGE, changeLanguage } from '../actions/language';
import getStoragedLanguage from './services/get-storage-language';

function* detectLanguageSaga() {
	try {
		const resp = yield call(getStoragedLanguage);
		if (resp.success && resp.payload) {
			yield put(changeLanguage(resp.payload));
		} else {
			yield put(changeLanguage(Localization.locale));
		}
	} catch (err) {
		console.log(err);
	}
}

export function* detectLanguageSagaWatcher() {
	yield takeEvery(DETECT_LANGUAGE, detectLanguageSaga);
}