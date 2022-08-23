import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import { store } from "store"
import "./firebase"

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
