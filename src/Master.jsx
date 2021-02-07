// master layout
import React, { createContext, useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import * as Pages from './pages/index';
import stlyes from './styles.css';
import NotFound from './pages/NotFound';

export default function Master(p) {
    return <div>
        <Nav />
        <PageRouter />
    </div>;
}

function PageRouter() {
    const [_, forceUpdate] = useState("true");
    var currPage = window.location.href.split("#")[1] || "Home";
    useEffect(() => window.addEventListener('popstate', (a) => { forceUpdate(new Date()) }), [])
    document.title = `Bardia Jedi ${currPage}`;
    try {
        return Pages[currPage].default();
    } catch (e) {
        console.error(e);
        return <NotFound mess={e.message}/>
    }
}