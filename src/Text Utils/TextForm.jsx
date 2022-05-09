import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here")
     
    function UpCase() {
            
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Changed to UPPERCASE","success")
    }
    function ClearText() {
        
        setText('');
        props.showAlert("Text Cleared","success")
        
}

    function handleOnChange(event) {
            console.log("on Change");
            setText(event.target.value); 
    }
    return (
        <>  
        <div className= {`container my-3 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Text Area :</label> */}
                <textarea className={`form-control my-3 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                <button className="btn btn-primary mt-2 mx-1 " onClick={UpCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-2 mx-1" onClick={ClearText}>Clear Text</button>
               
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
            </div>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </>
    )
}
