import React, {} from 'react';

export default function Article(p){
    console.log(p)
    return <article className={p.className} id={p.id}>
        <h2 hidden={p.lable === undefined}>{p.lable}</h2>
        {p.children}
    </article>
}