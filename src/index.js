import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppTest from './AppTest';
import AppuseState from './AppuseState';
import AppUseEffect from './AppUseEffect';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import AppFormulariosEventos from './AppFormulariosEventos';
import AppRouters from './AppRouters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<AppRouters></AppRouters>
			<AppFormulariosEventos />
			<AppUseEffect />
			<AppuseState />
			<AppTest />
			<App />
		</StyledEngineProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
