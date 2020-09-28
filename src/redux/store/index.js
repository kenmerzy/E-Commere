import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import Reactotron from '../../configs/ReactotronConfig'
import rootSaga from '../saga'

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError(error) {
    console.log(error)
  },
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],

}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = compose
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(
  Reactotron.createEnhancer(),
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)
persistStore(store).purge()

export default store
