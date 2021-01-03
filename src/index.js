import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";

import LangProvider from "./components/shared/LangContext";
import ThemeProvider from "./components/shared/ThemeContext"
import HomeProvider from "./components/shared/HomeContext";

const client = new GraphQLClient({
	url: "https://graphql.datocms.com/",
	headers: {
		Authorization: "Bearer 2e8e7670bfb204462d7794de400b60",
	},
});




ReactDOM.render(
	<Router>
		<React.StrictMode>
			<ClientContext.Provider value={client}>
				<LangProvider>
					<ThemeProvider>
						
							<App />
						
					</ThemeProvider>
				</LangProvider>
			</ClientContext.Provider>
		</React.StrictMode>
	</Router>,
	document.getElementById("root")
);
