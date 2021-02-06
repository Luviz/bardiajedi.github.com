import * as React from 'react';

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
        <li className="nav-spacer"></li>
        <NavItem text="Likedin" href="https://www.linkedin.com/in/bardia-jedi-3b2699b8/" target={"bjblog-ln"} icon=""/>
        <NavItem text="Github" href="https://github.com/luviz" target={"bjblog-gh"} icon=""/>
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