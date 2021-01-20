import React, { useContext } from "react";
//import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./components/shared/ThemeContext";

// import Dark from "./scss/app-dark.scss";
// import Light from "./scss/app.scss";

//import "./scss/app.scss";

import Layout from "./components/layout/Layout";
import Index from "./components/pages/index/index";
import About from "./components/pages/about/About";

const App = () => {
	const { theme } = useContext(ThemeContext);


	return (
		<>

			<Layout>
				<Switch>
					<Route path="/" exact render={() => <Index />} />
					<Route path="/about" render={() => <About />} />
				</Switch>
			</Layout>
		</>
	);
};

export default App;
