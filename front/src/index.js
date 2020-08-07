import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';




const initialState = {
	data: null,
	addSkip: 20,
	mainPage: {
		postsArr: [],
        searchPostArr: [],
        skip: 0,
		amountPosts: null,
	},
	userPage: {
		
	}
}

const reducer = (state = initialState, action) => {
	
	if (action.type === 'CLEAN_STATE') {
		return {...state, ...{data: null}}
	}
	else if (action.type === 'PUT_STATE'){
		return  {...state, ...{data: action.userData}}
	}
	else if (action.type === 'PUT_MAIN_PAGE_STATE'){
		return  {...state, ...{mainPage: {...state.mainPage, ...action.mainPageStore}}}
	}
	else
		return state;
}






const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));

