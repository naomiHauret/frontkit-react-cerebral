import React from "react"
import propTypes from "prop-types"
import CSSModules from "react-css-modules"
import styles from "./styles.css"

const Button = ({ label, handleClick }) => (
	<button
		data-react="rButton"
		className="bg-black sm:bg-green md:bg-yellow lg:bg-blue xl:bg-white text-red"
		styleName="module-style-test"
		onClick={handleClick}
	>
		{label}
	</button>
)

Button.propTypes = {
	label: propTypes.string,
	handleClick: propTypes.func,
}

export default CSSModules(Button, styles)
