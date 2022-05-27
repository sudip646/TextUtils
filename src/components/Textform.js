import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {


 

  //HandleUpclick Function
   const HandleUpClick= ()=>{
     let newtext=text.toUpperCase();
     setText(newtext);
     props.showAlert("Converted to Upper Case!","success");

   }

   //hANDLElOCLICK fUNCTION

   const HandleLoClick= ()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case!","success");

  }

   //onchange function

   const handleOnChange= (event)=>{
     setText(event.target.value)
  }
  
// clear function

const HandleClearClick=()=>{
  let newtext=''
  setText(newtext);
  props.showAlert("Text Cleared","success");
}



   //setting the state
const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:
       props.mode === "dark" ? "white" : "#10123b"}} id="myBox" rows="8">
      <h1>{props.heading}</h1>
      <div className="mb-3">
       
  

       <textarea className="form-control" value={text}
       onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#454886" : "white",color:
       props.mode === "dark" ? "white" : "#10123b"}}  id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}>Convert to Upper Case</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLoClick}>Convert to Lower Case</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick}>Clear Text</button>
    
    </div>
    <div className="container my-2" style={{color:
       props.mode === "dark" ? "white" : "#10123b"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
