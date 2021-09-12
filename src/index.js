console.log("./src/index.js")

import * as ReactDom from 'react-dom';
import Master from './Master';

var reactApp = document.createElement("div");
document.body.appendChild(reactApp);

ReactDom.render(Master(), reactApp)