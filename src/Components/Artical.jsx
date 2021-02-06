import React, {} from 'react';

export default function Article(p){
    console.log(p)
    return <article>
        <h2 hidden={p.lable === undefined}>{p.lable}</h2>
        {p.children}
    </article>
}