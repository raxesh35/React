import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Write text here');
    const handleltuInput = () => {
        let convertToUpCase = text.toUpperCase();
        setText(convertToUpCase)
    }
    const handleutlInput = () => {
        let convertToUpCase = text.toLowerCase();
        setText(convertToUpCase)
    }
    const handleChangeInput = (event) => {
        setText(event.target.value);
    }
    return (
         <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label"></label>
                <textarea className="form-control" id="mybox" onChange={handleChangeInput} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleltuInput}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleutlInput}>Convert to lowercase</button>
        </div>
    )
}
