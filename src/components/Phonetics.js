import React from "react"

export default function Phonetics(props){
    if(props.phonetics){
        return(
            <div className="Phonetics">
                {props.phonetics.map((phonetic, index)=>{
                    return(
                        <p key={index} >
                        <a className="btn" href={phonetic.audio} target="_blank" rel="noreferrer">
                            <i className="fas fa-volume-up"></i>
                        </a>
                        {phonetic.text}
                        </p>
                    );
                })}
            </div>
        )
    }
}