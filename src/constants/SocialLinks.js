import React from "react";

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
		text: "Twitter",
		link: "https://www.twitter.com/chinostrike",
	},
];

const SocialLinks = ({ placement }) => {
	return (
		<ul className={placement}>
			{social.map((link, index) => (
				<li className="footer__link__li" key={`social${index}`}>
					<a
						href={link.link}
						className="footer__link"
						target="_blank"
						rel="noreferrer"
					>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
