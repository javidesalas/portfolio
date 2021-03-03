import React, { useState, useRef, useEffect } from "react";

const Fader = (props) => {
	const { direction } = props;
	const { customClasses } = props;
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		const cleaner = domRef.current;
		return () => observer.unobserve(cleaner);
	}, []);
	return (
		<div
			className={`reveal  
            ${direction ? direction : ""} 
            ${isVisible ? "visible" : ""}
            ${customClasses ? customClasses : ""}`}
			ref={domRef}
		>
			{props.children}
		</div>
	);
};

export default Fader;
