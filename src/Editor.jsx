import React, { useEffect, useState } from 'react'
import img from "./codepen_logo.png"; 
import "./index.css"

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
    <div className='wrapper'>
    <div className='header'>
        <img src={img} alt="" />
        <span>Codepen</span>
    </div>
    <div className='input-cover'>
      <textarea value={html} type="text" placeholder='HTML' className='input' onChange={(e)=> {setHtml(e.target.value)}} />
    <div className='width'/>
      <textarea value={css} type="text" placeholder='CSS' className='input' onChange={(e)=> {setCss(e.target.value)}} />
      <div className='width'/> 
      <textarea value={js} type="text" placeholder='JS' className='input' onChange={(e)=> {setJs(e.target.value)}} />
    </div>
    <div className='output'>
        <iframe 
        srcDoc={codepenCode} 
        frameborder="0"
        title='output'
        width="100%"
        height="100%"
        >

        </iframe>
    </div>
    </div>
  )
}

export default Editor
