import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#d7b143' },
      secondary: { main: '#e6e6e6' }
    },
  });
const store = createStore(
  reducers, {}, compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
)
ReactDOM.render(<Provider store={store}><ThemeProvider theme={theme}><App/></ThemeProvider></Provider>, document.getElementById('root'));