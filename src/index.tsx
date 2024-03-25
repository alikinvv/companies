import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import 'normalize.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
