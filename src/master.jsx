// master layout
import * as React from 'react';

import Nav from './nav';
import * as Pages from './pages/index';


export default function Master(){
    return <div>
        <Nav/>
        <PageRouter/>
    </div>
}

function PageRouter(){
    // Pages.Home.default();
    var currPage = window.location.href.split("#")[1] || "Home";
    console.log();
    try {
        return Pages[currPage].default()

    }catch (e) {
        return Pages.NotFound.default();
    }
}