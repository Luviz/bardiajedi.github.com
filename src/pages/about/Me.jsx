import React, { } from 'react';

export default function Me() {
    return <div className="aboutMe">
        <p>
            I have spent most of my career doing the same thing over and over again, 
            and that have been to solve digital collaboration issues for different enterprises in public and private sectors. 
        </p>
        <p>
            Well, that might not seem to be that impressive at first glance. 
            But each solution/platform is different, 
            each client is different and if the client is different well so are their work-flows. 
            However, they all have many similar issues. 
        </p>
        <ul>
            <li>How can we use our 50 years old workflows digitally?</li>
            <li>How do we represent our organization?</li>
            <li>How do we find thing?</li>
            <li>How secure is it?</li>
            <li>etc...</li>
        </ul>
        <p>
            Even though I have worked with the same type of solutions, 
            have used different technologies, architectures and UX layouts.
        </p>
        <p>
            <i>Here are a few examples:</i>
            <br />
            The client has an on-premises AD and web-App. 
            They want their Office 365 groups to be sync to on-prem
            where they can get access to more sensitive documents. 
            Azure AD Connect was not up for the job, no problem! 
            Give me a few hours I’ll have some PowerShell running on-Prem.
            <br />
            In this case it was PowerShell, but it very well could have been a Linux/Unix server! 
            Well, no problems I would write a python script instead. Or maybe next time, 
            I just write a node.js solution, that would make the OS irrelevant. 
            As a Software developer it is my job to use the correct 
            technology available to me at each given time.  
            <br />
            Yeah! I’d love to write JS but if they don’t have node installed, 
            but they do have PowerShell. I’ll sure to use PowerShell.
        </p>
        <p>
            Another Client is moving from Notes to Office, 
            but they have a great deal of apps, 
            so they are worried about training their employees the SharePoint UX. 
            So, they want to use the SharePoint search as a widget in their Domino Intranet. 
            A bit dumb if you ask me. We have also given them multiple different options, 
            but they are still worried,   
            <i> and if they are worried, well they are worried… </i> 
            <br/>
            So, not a problem! I know and have used MSAL, Graph API and SharePoint API. 
            From there I can use a Kerberos token, that gives us a SSO into Office, 
            and then Graph/SharePoint API come out to play. 
            Now all I need is to read up on Dojo and Dijit, then we are good to go.
        </p>
        <p>
            Over 10 years ago, when I was young and naïve, I said: <br/>
            <i>'With Software, there are no limit, and you can do anything!'</i> <br/>
            But now I have added a new line to that quote: <br/>
            <i>'As long as you have time and resources…'</i> <br/>

        </p>
    </div>
}