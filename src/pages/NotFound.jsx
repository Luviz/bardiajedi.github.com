import * as React from 'react';
import { Cog, CogPathOnly } from '../assets/svg/NavIcons'
export default function NotFound() {
    return <main className="notFound">
        <span>404 - woops!</span>
        <div className="nf-art">
            <Cog className="nf-art-cog1"/>
            <Cog className="nf-art-cog2"/>
            <Cog className="nf-art-cog3"/>
        </div>
    </main>
}