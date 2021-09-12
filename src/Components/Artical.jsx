import React, {} from 'react';

export default function Article(p){
    console.log(p)
    return <article>
        <h2 hidden={p.label === undefined}>{p.label}</h2>
        {p.children}
    </article>
}