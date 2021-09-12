import * as React from 'react';
import Article from "../Components/Artical";
import Career from "./about/Career";
import Me from './about/Me';
import Projects from './about/Projects';

export default function Home() {
    return <main>
        <Article label="About">
           <Me/>
        </Article>
        <Article label="Career">
            <Career/>
        </Article>
        <Article label="Projects">
           <Projects/>
        </Article>
    </main>
}