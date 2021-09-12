import React from 'react';
import {BJIcon, GithubSvg, LinkedinSvg} from './assets/svg/NavIcons'

export default function Nav(prop) {
    return <nav>
       <NavItems/>
    </nav>
}

export function NavItems(props){
    return <ul>
        <NavItem text="Home" href="#" icon=""/>
        <NavItem text="Blog" href="#Blog" icon=""/>
        <NavItem text="About" href="#About" icon=""/>
        <li className="nav-spacer">
            <a aria-label="Bardia Jedi" href="/">
                <BJIcon width="40" height="40"/>
            </a>
        </li>
        <NavItemIcon text="Likedin" href="https://www.linkedin.com/in/bardia-jedi-3b2699b8/" target={"bjblog-ln"} >
            <LinkedinSvg/>
        </NavItemIcon>
        <NavItemIcon text="Github" href="https://github.com/luviz" target={"bjblog-gh"}>
            <GithubSvg/>
        </NavItemIcon>
    </ul>
}

export function NavItem(props){
    return <li className="nav-listItem">
        <a href={props.href} target={props.target}>
            {/* // icon */}
            <span>{props.text}</span>
        </a>
    </li>
}

export function NavItemIcon(props){
    return <li className="nav-listItemIcon">
        <a aria-label={props.text ?? ""} href={props.href} target={props.target}>
            {/* // icon */}
            {props.children}
        </a>
    </li>
}