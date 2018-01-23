import React from "react"
import { storiesOf, addDecorator } from "@storybook/react" // eslint-disable-line no-unused-vars

// add-on
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { withKnobs, text } from "@storybook/addon-knobs/react"
import { withSmartKnobs } from "storybook-addon-smart-knobs"

// component
import Button from "./"

/*

// -- Won't work
// style is applied, but no knobs nor complete info

storiesOf("Button", module)
.addDecorator((story, context) => withInfo("")(story)(context))
.addDecorator(withSmartKnobs)
.addDecorator(withKnobs)
.add("With a label", () => <Button label="Hey" onClick={action("Boo")} />)

*/

// -- Work partially (knobs work, incomplete info)

storiesOf("Button", module)
	.addDecorator((story, context) => withInfo("")(story)(context))
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs)
	.add("With a label", () => <Button label={text("label", "Hey")} onClick={action("Boo")} />)
