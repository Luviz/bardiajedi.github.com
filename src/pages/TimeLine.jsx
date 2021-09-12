import React, { useEffect, useState } from 'react';

export default function TimeLine() {
    return <TimeLineContent />
}

function Line(p) {
    const { lowerBound, upperBond, nodes } = p;
    const delta = upperBond - lowerBound;

    // console.log({delta, lowerBound, upperBond, nodes});

    const divs = [];
    for (const node of nodes) {
        const pos = 100*(node.value-lowerBound)/delta  
        divs.push(<div className={node.className} style={{ position: "absolute", left: `${pos}%` }} />)
    }

    // p/tot tot = delta
    return <div style={{ width: "700px", height: "1rem" }}>
        <div style={{ backgroundColor: "green", width: "100%", margin: "1rem", height: "5px", position: "relative" }}>
            <div className={"icon-heart"} style={{ position: "absolute", left: "0" }} />
            {divs}
            <div className={"icon-diamond-blue"} style={{ position: "absolute", left: "100%" }} />
        </div>
    </div>
}

function corrd() {
    return <div style={{ backgroundColor: "green", width: "100%", margin: "1rem", height: "5px", position: "relative" }}>
    </div>
}

function TimeLineContent() {
    const nodes = [
        {value: new Date().getTime(), className:"icon-circle-black"},
        {value: new Date("2021-03-06T11:00:00").getTime(), className:"icon-circle-red"},
        {value: new Date("2021-03-06T12:00:00").getTime(), className:"icon-circle-yellow"},
        {value: new Date("2021-03-06T03:00:00").getTime(), className:"icon-diamond-orange"},
    ]


    return <main>
        <article>
            hello word
        </article>
        <Line lowerBound={new Date("2021-03-06T00:00:00").getTime()} upperBond={new Date("2021-03-07T00:00:00").getTime()} nodes={nodes}/>

    </main>
}