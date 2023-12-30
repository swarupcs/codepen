import React, { useEffect, useState } from 'react'

function Editor() {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");

    const [codepenCode, setCodepenCode] = useState("");

    useEffect(()=> {
    // The useEffect hook is triggered when any of the dependencies (html, css, js) change.

    // setTimeout is used to introduce a delay of 200 milliseconds before updating the state.
        const timeout = setTimeout(() => {
            setCodepenCode(`
            <html>
            <style>${css}</style>
            <script>${js}</script>
            <body>${html}</body>
            </html>
            `)
        },200)

         // The return statement defines the cleanup function, which clears the timeout to avoid memory leaks.
        return () => clearTimeout(timeout)
    }, [html, css, js])
  return (
    <div>
    <div>
      <textarea value={html} type="text" onChange={(e)=> {setHtml(e.target.value)}} />

      <textarea value={css} type="text" onChange={(e)=> {setCss(e.target.value)}} />
      <textarea value={js} type="text" onChange={(e)=> {setJs(e.target.value)}} />
    </div>
    {codepenCode}
    </div>
  )
}

export default Editor
