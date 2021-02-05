// master layout
import * as React from 'react';
import Nav from './nav';
import * as Pages from './pages/index';

export default function Master(p) {
    console.log("master")
    return <div>
        <Nav />
        <PageRouter />
    </div>;
}

function PageRouter() {
    const [meh, setMeh] = React.useState("true");
    var currPage = window.location.href.split("#")[1] || "Home";
    if (meh === "true"){
        window.addEventListener('popstate', (a) => { console.log(a), setMeh(new Date())});
    }

    try {
        return Pages[currPage].default();
    } catch (e) {
        console.error(e);
        return Pages.NotFound.default();
    }
}