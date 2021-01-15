import React, { useContext } from "react";

import { ThemeContext } from "../shared/ThemeContext";

import { themer } from "../shared/helpers";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
const { theme } = useContext(ThemeContext);

	return (
		<>
			<div
				className={themer("fake-background", "fake-background", theme)}
			></div>
			<Navbar />
			<div className="content">{props.children}</div>
			<Footer />
		</>
	);
};

export default Layout;
