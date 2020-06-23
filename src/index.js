import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAt311-i4Vq2zpBrlA1QgnyJ_omRcRrsuI',
	authDomain: 'cart-3613b.firebaseapp.com',
	databaseURL: 'https://cart-3613b.firebaseio.com',
	projectId: 'cart-3613b',
	storageBucket: 'cart-3613b.appspot.com',
	messagingSenderId: '928827306633',
	appId: '1:928827306633:web:d3e4b6f28a8f24f6794c58',
	measurementId: 'G-BQ0YW3QZZ4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
