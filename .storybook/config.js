import React from "react"
import { configure, addDecorator } from "@storybook/react"

// add-on
import addonBackgrounds from "@storybook/addon-backgrounds"
import { setDefaults } from "@storybook/addon-info"
import { checkA11y } from "@storybook/addon-a11y"
import { withConsole } from "@storybook/addon-console"

import styles from "./../src/assets/css/main.css"


// addon-info config
setDefaults({
	inline: true,
	header: false,
	maxPropsIntoLine: 1,
	maxPropObjectKeys: 10,
	maxPropArrayLength: 10,
	maxPropStringLength: 150,
})

// Decorators
addDecorator(
	addonBackgrounds([
		{ name: "light", value: "rgb(255, 255, 255)", default: true },
		{ name: "dark", value: "rgb(25, 25, 5)" },
	]),
)
addDecorator(checkA11y)
addDecorator((story, context) => withConsole()(story)(context))

// load automatically stories
const req = require.context("./../src/components/presentationals", true, /\.stories\.js$/)
function loadStories() {
	req.keys().forEach((filename) => req(filename))
}
configure(loadStories, module)