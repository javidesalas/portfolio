import React from 'react';

const social = [
	{
		text: "LinkedIn",
		link: "https://www.linkedin.com/in/javidesalas/",
	},
	{
		text: "Github",
		link: "https://github.com/javidesalas",
	},
	{
		text: "Mail",
		link: "mailto:javidesalas@gmail.com",
	},
	{
		text: "twitter",
		link: "https://www.twitter.com/chinostrike",
	},
];

const SocialLinks = () => {
	return (
		<ul className="footer__link-box">
			{social.map((link, index) => (
				<li key={`social${index}`}>
					<a href={link.link}>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;