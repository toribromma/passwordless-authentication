import logo from './logo.svg';
import './App.css';

import MojoAuth from "mojoauth-web-sdk"
import { useEffect, useState } from 'react';

function App() {
const [payload, setPayload] = useState(null)

/* 1 Initialize and show the form*/

useEffect(() => {
	const mojoauth = new MojoAuth("test-f97d96e6-b97f-449e-8c5b-a03e83bb1177",{
            source:[{type:'email', feature:'magiclink'}]
        });
	mojoauth.signIn().then(payload => {
	    setPayload(payload)
	    document.getElementById("mojoauth-passwordless-form").remove();
	})
}, [ ])
return (
	<div>
	    {/* 2 Put a div that will contain the form*/}
	    <div id="mojoauth-passwordless-form" />
	    <pre>{JSON.stringify(payload, null, 4)}</pre>
	</div>
	)
}
export default App
