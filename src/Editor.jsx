import React, { useEffect, useState } from 'react';
import logo from "./codepen_logo.png"
import useLocalStorage from './storage';

const Editor = () => {

    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCss] = useLocalStorage('css', '');
    const [js, setJs] = useLocalStorage('js', '');
    const [codepenCode, setcodepenCode] = useState('')


    useEffect(() => {
        const timeout = setTimeout(() => {
            setcodepenCode(`
            <html>
              <style>${css}</style>
              <body>${html}</body>
              <script>${js}</script>
            </html>
          `)
        }, 200)

        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <div className='wrapper'>
            <div className='header'>
                <img src={logo} alt="" />
                <span>Codepen</span>
            </div>
            <div className='input-cover'>
                <textarea type="text" className='input' value={html} placeholder="HTML" onChange={(e) => setHtml(e.target.value)} autoComplete="off" />
                <div className='width'></div>
                
               
                <textarea type="text" className='input' value={css} placeholder="CSS" onChange={(e) => setCss(e.target.value)} autoComplete="off" />
                <div className='width'></div>
               
                <textarea type="text" className='input' value={js} placeholder="JS" onChange={(e) => setJs(e.target.value)} autoComplete="off" />
                <div className='width'></div>

            </div>
            <div className='output'>
                <iframe
                    srcDoc={codepenCode}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default Editor
