import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Write text here');
    const handleltuInput = () => {
        let convertToUpCase = text.toUpperCase();
        setText(convertToUpCase)
        props.showAlert('success', 'Text converted to uppercase')
    }
    const handleutlInput = () => {
        let convertToUpCase = text.toLowerCase();
        setText(convertToUpCase)
        props.showAlert('success', 'Text converted to lowercase')
    }
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('success', 'Copy to clipboard successfully')
    }
    const handleClearnput = () => {
        setText('')
        props.showAlert('success', 'Cleared content')
    }
    const handleChangeInput = (event) => {
        setText(event.target.value);

    }
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"></label>
                    <textarea className="form-control" id="mybox" onChange={handleChangeInput} value={text} rows="8" style={{backgroundColor: props.mode === 'light'?'white':'#042743', color: props.mode === 'dark'?'white':'#042743'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleltuInput}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleutlInput}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy to clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearnput}>Clear content</button>
            </div>
            <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}} >
                <h2>Your enter text summery</h2>
                <p>Text have total <b>{text.split(/\s+/).filter((elm)=>{return elm.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>It will take <b>{0.008 * text.split(" ").filter((elm)=>{return elm.length!==0}).length}  minutes </b> to read content </p>
            </div>
        </>
    )
}
