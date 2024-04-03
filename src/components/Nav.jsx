import { NavLink } from "react-router-dom";
import UserIcon from "/nav-icon/user-icon.png";
import navbarData from "./../data/navbarData.json";

// eslint-disable-next-line react/prop-types
const NavButton = ({ to, title, icon, alt }) => {
    return (
        <li>
            <NavLink to={to}>
                <img src={icon} alt={alt} />
                <h3>{title}</h3>
            </NavLink>
        </li>
    )
}

const Nav = () => {
    return (
        <>
            <aside className="navbar">
                <ul>
                    {
                        navbarData.map(({title, icon, alt, to, index}) => {
                            return <NavButton key={index + title} to={to} title={title} icon={icon} alt={alt} />
                        })
                    }
                </ul>
            </aside>
        </>
    )
}

export default Nav