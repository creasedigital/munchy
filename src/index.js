import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './themeExtender';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
// 	apiKey: '"a7bbf0ef45ca4bf1db934018ef5d612162aea86e',
// 	authDomain: 'react-munchy.firebaseapp.com',
// 	databaseURL: 'https://react-munchy-default-rtdb.firebaseio.com',
// 	projectId: 'react-munchy',
// 	storageBucket: 'react-munchy.appspot.com',
// 	messagingSenderId: 'SENDER_ID',
// 	appId: 'APP_ID',
// 	measurementId: 'G-MEASUREMENT_ID',
// };

// const app = initializeApp(firebaseConfig);

// Get a reference to the database service
// const database = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ChakraProvider resetCSS={true} theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
