import React from 'react';
import SocialLinks from '../../constants/SocialLinks'

const footer = () => {
	const year = new Date().getFullYear();
    return (
			<footer className="footer">
				<nav>
					<SocialLinks />
			</nav>
			<p>
				{`© ${year} Javier de Salas`}
			</p>
			</footer>
		);
};

export default footer;