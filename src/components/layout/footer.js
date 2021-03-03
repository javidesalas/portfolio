import React from 'react';
import SocialLinks from '../../constants/SocialLinks'

const footer = () => {
	const year = new Date().getFullYear();
    return (
			<footer className="footer">
				<nav>
					<SocialLinks placement="footer__link-box" />
				</nav>
				<p className="footer__copyright">{`© ${year} Javier de Salas`}</p>
			</footer>
		);
};

export default footer;