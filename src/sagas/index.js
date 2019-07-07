import { put, takeLatest, all, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
function* fetchTemp(actionObj) {
   const apiKey = '****you should get you own key***********';
   const url = `https://api.openweathermap.org/data/2.5/weather?  
   q=${actionObj.name }&appid=${apiKey}&units=metric`;
const json = yield fetch(url).then(response => response.json(), );
yield [put({ type: "TEMP_RECEIVED", json: json.main.temp }), put(push(`/city:${json.name}`))];
}
function* actionWatcher() {
     yield takeLatest('GET_TEMP', fetchTemp)
}
export default function* rootSaga() {yield all([actionWatcher(),]);}