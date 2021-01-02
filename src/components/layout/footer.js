import React from 'react';
import Nav from 'react-bootstrap/Nav'
import footerLinks from '../../constants/footerLinks'

const footer = () => {
    return (
			<footer>
				<Nav variant="dark" bg="dark">
					<ul>
						{footerLinks.map((elm) => (
							<Nav.Item as="li" key={elm.text}>
								<Nav.Link href={elm.link}>
									{elm.text}
								</Nav.Link>
							</Nav.Item>
						))}
					</ul>
				</Nav>
			</footer>
		);
};

export default footer;