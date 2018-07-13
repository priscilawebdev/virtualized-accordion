import { injectGlobal } from 'preact-emotion'

export default injectGlobal`
    * { 
        outline: none 
    },
    html, body {
        background: #eeeeee;
        min-height: 100%;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 1em;
        padding: 0;
        margin: 0;
    },
    ul, li {
        margin: 0;
        padding: 0;
    }
`
