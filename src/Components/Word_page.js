import React from "react";
import Home from "./Home";
import { useState } from "react";

function Word_page(){

    const [resultString, serResultString]=useState('');
    const [wordcount, setWordcount]=useState(0);
    const [charactercount, setCharactercount]=useState(0);
    const [showcounts, setShowcounts]=useState(false);

    const countResults=()=>{
        const words=resultString.trim().split(/\s+/);
        const wCount=words.length;

        const characters=resultString.replace(/\s/g, '')
        const chCount=characters.length;

        setWordcount(wCount);
        setCharactercount(chCount);
        setShowcounts(true);
    }

    return(
        <div>
            <Home></Home>
            <input type="text" id="word-input" value={resultString} onChange={(e)=>serResultString(e.target.value)}/>
            <button id="btn" onClick={countResults}>Process Word</button>
            { showcounts && (
                <table border={1}>
                    <tr>
                            <th>Characters</th>
                            <th>Words</th>
                    </tr>
                    <tr>
                        <td>{charactercount}</td>
                        <td>{wordcount}</td>
                    </tr>
                </table>
            )}
        </div>
    )
}

export default Word_page;