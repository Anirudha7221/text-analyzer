import React from "react";
import Home from "./Home";
import { useState } from "react";

function Para_page(){

  const [resultString, setResultString]=useState('');

  const countResults=()=>{
     const wordCount=resultString.trim().split(/\s+/).length;
     const characterCount = resultString.replace(/\s/g, '').length;
     const sentences = resultString.trim().split(/[.!?]+\s*/).length;
     const paragraphs = resultString.trim().split(/\n\s*\n+/).length;
     const spaceCount = resultString.split(' ').length - 1;
     const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const punctuationArray = resultString .match(punctuations) || [];
    const punctuationCount=punctuationArray.length;

    return {wordCount, characterCount, sentences, paragraphs, spaceCount, punctuationCount}
  }

  const { wordCount, characterCount, sentences, paragraphs, spaceCount, punctuationCount}=countResults();

  return(
    <div>
        <Home></Home>
        <textarea type="text" size={5} id="para-input" value={resultString} onChange={(e)=>setResultString(e.target.value)} rows={5} cols={30}  placeholder="Type or copy/paste your content here." />
        <table border={1}>
            <tr>
                <th>Characters</th>
                <th>Words</th>
                <th>Sentences</th>
                <th>Paragraphs</th>
                <th>Spaces</th>
                <th>Punctuation</th>
            </tr>
            <tr>
                <td>{characterCount}</td>
                <td>{wordCount}</td>
                <td>{sentences}</td>
                <td>{paragraphs}</td>
                <td>{spaceCount}</td>
                <td>{punctuationCount}</td>
            </tr>
        </table>
    </div>
  )
}

export default Para_page;