import React from "react"

export default function Phonetics(props){
    if(props.phonetics){
        return(
            <div className="Phonetics">
                {props.phonetics.map((phonetic, index)=>{
                    return(
                        <p key={index} >
                        <a href={phonetic.audio} target="_blank" className="fas fa-volume-up"></a>
                        {phonetic.text}
                        </p>
                    );
                })}
            </div>
        )
    }
}