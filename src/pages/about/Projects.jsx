import React, { } from 'react';

export default function Projects() {
    return <div>
        <hr />
        <h3>
            Disclaimer
        </h3>
        <p>
            The project blow has been obscured. <br />
            The titles are not the name of the applications and or project, they are simply the description of what they do. <br />
            The content might be a bit thin but if you want to know more you are welcome to contact me. <br />
        </p>
        <hr />
        <h3>
            Microsoft Teams management utilities (2019~2020)
        </h3>
        <h4>Purpose</h4>
        <p>
            At the moment the Microsoft Teams Client is a bit rugged,
            you can clearly see that if a user is member in over 20 teams,
            they might have problems. There is also no-good way of finding teams.
        </p>
        <p>
            Most enterprises like to be able to tag their teams their way,
            and Microsoft is unable to accommodate all enterprises even though the new Tags and Labels are awesome.
            We still have enterprises that in need of unique Teams solutions.
        </p>
        <h4>Solution</h4>
        <p>
            Management utilities is a SPFx applications (atm.). Its job is to present Office 365/ Teams,
            and if there is any extra metadata.
            The app is designed to work with Microsoft Teams Client and admin center, and not to substitute them.
        </p>
        <p>
            It allows end users:
        </p>
        <ol>
            <li>To find their teams</li>
            <li>Search after teams that they might want/need to join.</li>
            <li>Interface with extended functionalities that we deliver.</li>
        </ol>
        <hr />
        <h3>
            Microsoft Teams Provisioning utilities/ flow. (2019~2020)
        </h3>
        <h4>Purpose</h4>
        <p>
            Admins like to control and administrate the creation of Teams. <br />
            There are two sides to this problem: <br />
            The former is that enterprises end users are not that tech savvy,
            so the admins like to help as much as they can.
            But in larger organizations admins cannot physically manage that load.
            so, we provided them with a self-service application.
        </p>
        <p>
            The latter is the sometimes the enterprises like to run
            preflight checks on the end users request for teams.
        </p>
        <p>
            Centralizing Team creation and provisioning
            to a single application simplifies and enables extended functionalities.
        </p>
        <h4>Solution</h4>
        <p>
            The Application uses a serverless architecture; the request is made over http and durable orchestration runs one of the many flows that client might need.
            The Application can communicate with other applications that we might be running for a given client.
        </p>
        <hr />
        <h3>
            Microsoft Teams extend life cycle. (2019~2020)
        </h3>
        <h4>Purpose</h4>
        <p>
            Currently Microsoft Office life cycle policy is quite simplistic,
            and our clients do not like standard life cycle,
            in most cases they don’t like automatic deletion of their teams.
            They usually have complicated flows the like to run in the life cycle of a team.
        </p>
        <h4>Solution</h4>
        <p>
            The Life Cycle app uses a serverless architecture and runs on given schedules.
            It needs to track teams or office 365 groups.
            The Application follows a simple JSON config file that determines the time and the operation to be executed on the life cycle object.
            I designed the solution in a way that an admin can easily change the flow of life cycle by changing the JSON file.
            If an action is missing any developer can just add it to the list.
        </p>
        <hr />
        <h3>There is more...</h3>
    </div>
}