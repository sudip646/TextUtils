import React, { useState } from "react";
export default function About(props) {
  /*const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });*/

  let myStyle={
    color: props.mode==='dark'?'white':'#10123b',
    backgroundColor: props.mode==='dark'?'#10123b':'white'
  }
 
  

  /*let myStyle={
        color:'red',
        backgroundColor:'black'
    }*/
  return (
    <div className="container my-2" style={myStyle}>
      <h1><strong>About Us</strong></h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        Texutils gives you a way to analyze your text quickly and efficiently, be it word count or character count
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
       Textutils is a free character counter tool that provides instant character count and word count statistics for a given text.
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        It works in any web browser such as Chrome,Firefox,Internet Explorer,Safari,Opera.
      </div>
    </div>
  </div>
</div>

     
      
    </div>
  );
}
