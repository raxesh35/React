import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Write text here');
    const [copy, setCopy] = useState('');
    const handleltuInput = () => {
        let convertToUpCase = text.toUpperCase();
        setText(convertToUpCase)
        setCopy('')
    }
    const handleutlInput = () => {
        let convertToUpCase = text.toLowerCase();
        setText(convertToUpCase)
        setCopy('')
    }
    const handleCopyToClipboard = () => {
        var sampleTextarea = document.createElement("textarea");
        document.body.appendChild(sampleTextarea);
        sampleTextarea.value = text; //save main text in it
        sampleTextarea.select(); //select textarea contenrs
        document.execCommand("copy");
        document.body.removeChild(sampleTextarea);
        setCopy('Copied !!')
    }
    const handleClearnput = () => {
        setText('')
        setCopy('')
    }
    const handleChangeInput = (event) => {
        setText(event.target.value);
        setCopy('')
    }
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <b className='text-success'>{copy}</b>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"></label>
                    <textarea className="form-control" id="mybox" onChange={handleChangeInput} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleltuInput}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleutlInput}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard}>Copy to clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleClearnput}>Clear content</button>
            </div>
            <div className='container'>
                <h2>Your enter text summery</h2>
                <p>Text have total <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>It will take <b>{0.008 * text.split(" ").length}  minutes </b> to read content </p>
            </div>
        </>
    )
}
