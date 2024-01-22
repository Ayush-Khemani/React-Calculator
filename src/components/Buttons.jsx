import React from "react";

function Buttons({
    val,
    handleClickButton
}) {
    
    
    return(
        <>
        <button onClick={(e) => handleClickButton(e.target.innerText)} className="bg-gray-300 rounded-lg px-4 py-4">{val}</button>
        </>
    )
}

export default Buttons;