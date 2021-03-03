import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<>
			<div
				className="fake-background"
			></div>
			<Navbar />
			<div className="content">{props.children}</div>
			<Footer />
		</>
	);
};

export default Layout;
