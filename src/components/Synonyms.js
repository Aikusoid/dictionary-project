import React from "react"

export default function Synonyms (props){
    if (props.synonyms){
        return(
            <div className="Synonyms">
                <i className="fas fa-hand-point-right"></i>
                <ul >
                    {props.synonyms.map((synonym, index)=>{
                        return (
                            <li key={index}>{synonym}</li>
                        )
                    })}
                    <hr />
                </ul>
                
            </div>
        )
    } else{
        return null
    }
}