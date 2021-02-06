// master layout
import React,{createContext, useContext, useEffect, useState} from 'react';
import Nav from './nav';
import * as Pages from './pages/index';
import stlyes from './styles.css'

export default function Master(p) {
    console.log("master")
    return <div>
        <Nav />
        <PageRouter />
    </div>;
}

function PageRouter() {
    const [_, forceUpdate] = useState("true");
    var currPage = window.location.href.split("#")[1] || "Home";
    useEffect(()=>window.addEventListener('popstate', (a) => { console.log(a), forceUpdate(new Date())}), [])

    try {
        return Pages[currPage].default();
    } catch (e) {
        console.error(e);
        return Pages.NotFound.default();
    }
}