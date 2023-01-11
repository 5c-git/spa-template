// Redux
import { Provider } from 'react-redux'
import { persistor, store } from './app/model/store'
import { PersistGate } from 'redux-persist/integration/react'

// Mui
import { theme } from 'shared/theme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'

// React
import ReactDOM from 'react-dom/client'

// App
import App from 'app/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <App store={store}/>
      </PersistGate>
    </ThemeProvider>
  </Provider>
)
