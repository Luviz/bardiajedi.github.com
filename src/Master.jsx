// master layout
import React, { createContext, useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import * as Pages from './pages/index'; 
import NotFound from './pages/NotFound';
import './styles.css';
// import NotFound from './pages/NotFound';

export default function Master(p) {
    return <div>
        <Nav />
        <PageRouter />
    </div>;
}

function PageRouter() {
    const [_, forceUpdate] = useState("true");
    useEffect(() => window.addEventListener('popstate', (a) => { forceUpdate(new Date()) }), [])
    const pageBreakDown = window.location.href.match(/#(\w+)/) || []
    const hashValue = pageBreakDown[1] || "Home";
    // case ambiguous
    const currPage = Object.keys(Pages).find(p => p.toLowerCase() === hashValue.toLowerCase()) 
    document.title = `Bardia Jedi - ${currPage}`;
    try {
        return Pages[currPage].default();
    } catch (e) {
        console.error(e);
        return <NotFound message={e.message}/>
    }
}