import React from 'react';
import img from '../assets/the-potato.png'

export default function Potato() {
    return <main>
        <article>
            <h1>You are it!</h1>
            <div className={"img-container"}>
                <img src={img} alt="" srcset="" />
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
    </main>
}