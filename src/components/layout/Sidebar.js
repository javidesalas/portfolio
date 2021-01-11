import React, { useContext } from 'react';
import { ThemeContext } from "../shared/ThemeContext";

import PageLinks from './PageLinks'
import { themer } from "../shared/helpers";


const Sidebar = ({ showSidebar, toggleSidebar }) => {
    const {theme} = useContext(ThemeContext)
    return (
			<div
					className={`${themer("nav__sidebar", "nav__sidebar", theme)} ${
						showSidebar && "nav__sidebar--show"
					}`}
					onClick={toggleSidebar}
				>
					<div
						className={themer(
							"nav__link nav__sidebar__close-button",
							"nav__link",
							theme
						)}
					>
						{" "}
						X{" "}
					</div>
					<PageLinks placement="nav__sidebar__link-box" />
				</div>
			
		);
};

export default Sidebar;