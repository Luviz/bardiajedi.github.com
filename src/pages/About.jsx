import * as React from 'react';
import Article from "../Components/Artical";
import Career from "./about/Career";
import Me from './about/Me';
import Projects from './about/Projects';

export default function Home() {
    return <main>
        <Article lable="About">
           <Me/>
        </Article>
        <Article lable="Career">
            <Career/>
        </Article>
        <Article lable="Projects">
           <Projects/>
        </Article>
    </main>
}