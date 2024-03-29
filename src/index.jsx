import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppTest from './AppTest';
import AppuseState from './AppuseState';
import AppUseEffect from './AppUseEffect';
import AppFormulariosEventos from './AppFormulariosEventos';
import AppRouters from './AppRouters';
import AppUseRef from './AppUseRef';
import AppUseMemo from './appUseMemo';
import AppLayoutEffect from './AppLayoutEffect';
import AppUseReducer from './AppUseReducer';
import AppCarousel from './AppCarousel';

import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<AppCarousel/>
			<AppUseReducer></AppUseReducer>
			<AppLayoutEffect></AppLayoutEffect>
			<AppUseMemo></AppUseMemo>
			<AppUseRef></AppUseRef>
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
