import React, { Fragment } from "react"
import Helmet from "react-helmet"

const title = "Welcome home"

const Home = () => (
	<Fragment>
		<Helmet
			title={title}
			meta={[
				{
					name: "description",
					content: "Meta description of page comes here",
				},
				{
					property: "og:title",
					content: title,
				},
			]}
		/>
		<h1>Home</h1>
	</Fragment>
)

export default Home
