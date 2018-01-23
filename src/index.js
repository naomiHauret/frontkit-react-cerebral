import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter } from "react-router-dom"
import App from "./components/containers/App"
import styles from "./assets/css/main.css" // eslint-disable-line no-unused-vars

const rootEl = document.querySelector("#app")

if (process.env.NODE_ENV === "development") {
	const wrapApp = (AppComponent) => (
		<BrowserRouter>
			<AppContainer>
				<AppComponent />
			</AppContainer>
		</BrowserRouter>
	)

	rootEl !== null && ReactDOM.render(wrapApp(App), rootEl)

	if (module.hot && rootEl !== null) {
		module.hot.accept("./components/containers/App", () => {
			const NextApp = require("./components/containers/App").default
			ReactDOM.render(wrapApp(NextApp), rootEl)
		})
	}
} else {
	rootEl !== null &&
		ReactDOM.render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
			rootEl,
		)
}
