import React from "react"
import { shallow } from "enzyme"

import Button from "./"

test("render itself", () => {
	let wrapper = shallow(<Button />)
	expect(wrapper).toMatchSnapshot()
})

test("render itself with label", () => {
	let wrapper = shallow(<Button label="Hey" />)
	expect(wrapper.text()).toEqual("Hey")
})

test("click event working", () => {
	const wrapper = shallow(<Button label="Hey" handleClick={console.log("Hello world!")} />)

	expect(wrapper).toMatchSnapshot()

	wrapper.find('[data-react="rButton"]').simulate("click")

	expect(wrapper).toMatchSnapshot()
})
