import React, { useState } from 'react';
import { Cog, CogPathOnly } from '../assets/svg/NavIcons'
import Article from '../Components/Artical';
export default function NotFound(p) {
    const [showError, setError] = useState(true);
    return <main className="notFound">
        <div className="nf-art">
            <Cog className="nf-art-cog1" />
            <Cog className="nf-art-cog2" />
            <Cog className="nf-art-cog3" />
        </div>
        <h3 onClick={() => setError(!showError)}>
            It seems like something's stuck!
        </h3>
        <div className={showError ? "nf-error-msg-hidden": "nf-error-msg"}>
            {p?.message || "no erro message"}
        </div>
        <Article lable="Looking for my blog?">
            <p>
                My blog need to be migrated over to here. <a href="https://perspective.bardiajedi.com/">Blog</a>
            </p>
        </Article>
    </main>
}