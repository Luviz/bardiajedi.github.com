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
    </ul>
}

export function NavItem(props){
    return <li>
        <a href={props.href}>
            {/* // icon */}
            <span>{props.text}</span>
        </a>
    </li>
}