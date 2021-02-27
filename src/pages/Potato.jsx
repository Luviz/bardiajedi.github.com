import React, { useEffect, useState } from 'react';
import img from '../assets/the-potato.png'
import { CleanDateTime } from "../util";

const potatoApi = "https://bj-potato.azurewebsites.net/api/potato";

export default function Potato() {
    return <PotatoContent />
}

function PotatoForm(p) {
    const [resContent, setResContent] = useState("")
    const [errors, setErrors] = useState("")
    const { href } = window.location;
    const keyPair = href.split('#')[1].split('=');
    if (resContent.length > 0) {
        const url = new URL(window.location.href);
        return <div>
            <label>here is you link:</label>
            <input type="text"  style={{ width: "15rem" }} value={`${url.origin}/#potato=${resContent}`} />
        </div> 
    }
    if (keyPair.length < 2) {
        return <div>
            I don't think you're it! <br />
            The Grand potato holders can be found at the bottom of the page
        </div>
    }
    if (!p.latest) {
        return <div>Gettting the last Potato holeder</div>
    }
    if (p.latest.RowKey === keyPair[1]) {

        return <form className={"potato-form-container"} onSubmit={e => {
            const fd = new FormData(e.target);
            const uA = fd.get("userAlias");
            if (uA.length >= 3) {
                setErrors("")
                CallThePotatoApi(uA);
            } else {
                setErrors("Hey I need 3 charactars, here!")
            }
            e.preventDefault()
        }}>
            <label htmlFor="userAlias">Alias:</label>
            <input autoComplete="off" type="text" id="userAlias" name="userAlias" onChange={(e) => ""} />
            <input type="submit" value="Take the Potato" onClick={console.log} />
            <span className={'error'}>{errors}</span>
        </form>
    } else {
        return <div>Sorry, But there is no potato here anymore!</div>
    }

    function CallThePotatoApi(uA) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(potatoApi, {
            method: "POST",
            headers,
            body: JSON.stringify({ name: uA }),
            redirect: 'follow'
        })
            .then(res => res.json())
            .then(rData => setResContent(rData.hashBody));
    }
}

function getPotatoHolder() {
    try {
        return fetch(potatoApi).then(res => res.json());
    } catch (e) {
        console.log(e)
    }
}

function TableRow({ Name, CreateAt, RowKey }) {
    return <tr>
        <td>{Name}</td>
        <td>{CleanDateTime(CreateAt)}</td>
        <td>{RowKey}</td>
    </tr>
}

function TheGrandPotatoHolders({ potatoHolders }) {
    if (potatoHolders && [potatoHolders.length > 0]) {
        const rows = potatoHolders.map(p => <TableRow {...p} />)
        return <div className="table-container">
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Got Potato At</td>
                        <td>Code</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    } else {
        return <div>working maybe?</div>
    }
}

function PotatoContent() {
    const [potatoholders, setPotatoHolder] = useState([])
    useEffect((_) => {
        getPotatoHolder().then(setPotatoHolder).catch(console.error);
    }, []);
    if (potatoholders.length > 1) {
        potatoholders.sort((p1, p2) => new Date(p2.CreateAt) - new Date(p1.CreateAt));
    }

    return <main>
        <article>

            <h1>You are it!</h1>
            <div className={"img-container"}>
                <img src={img} alt="Potato" />
            </div>
            <h3>Wait What...</h3>
            <p>
                This is a fun game of Potato,
                designed to use Spearing and Phishing techniques to pass the potato on.
            </p>
            <h3>What do I do?</h3>
            <ol>
                <li>Sign your name.</li>
                <li>Get a link.</li>
                <li>Think of a target.</li>
                <li>Make them click the link!</li>
            </ol>
            <PotatoForm latest={potatoholders[0]} />
            <p>
                Give me a bit a of break the game is quick limited at the moment,
                and I would like you not use shotgun attacks. <br />
                The link that you get is personalized to your instance of a game.
                And it will only be valid until the next preson, registers them self.
            </p>
            <h3>Rules</h3>
            <ul>
                <li>Anything gose! It doesn't matter how they get as long as the URL code is intact!</li>
                <li>Be honorable! Fare and square, just register yourself and find another target.</li>
                <li>Be fare! Nobody likes to hurt a poppy, pick a target will continue the game on.</li>
            </ul>
            <h3>What is a valid hit</h3>
            <p>
                The tager must have the correct url and the code <code> /#Potato=yYab12 </code> <br />
                In that case the target should get to see the form,
                and be able to signs up and get a new link to send to their target. <br />
                If you haven't contacted the person that passed you the potato, already.
                You should probably do so!<br />
                Note that you can get to this page via #Potato, just live the code out of the url.
            </p>
        </article>
        <article>
            <h1>The Grand potato holders</h1>
            <TheGrandPotatoHolders potatoHolders={potatoholders} />
        </article>
    </main>
}