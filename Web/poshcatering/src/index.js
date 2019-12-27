import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#d7b143' },
      secondary: { main: '#e6e6e6' }
    },
  });
export const store = createStore(
  reducers, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
)
ReactDOM.render(<Provider store={store}><ThemeProvider theme={theme}><App/></ThemeProvider></Provider>, document.getElementById('root'));