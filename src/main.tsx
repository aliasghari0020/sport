import {loadTheme} from "./utils/themeLoader"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/index.scss'
import './index.css'
import './i18n'


loadTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
