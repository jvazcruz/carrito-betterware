import { createStore } from 'redux';
import rootReducer from  '../reducers';

//Cuando llamamos a esta función devolvemos la tienda creada con nuestros reductores

export default function store() {
    return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
