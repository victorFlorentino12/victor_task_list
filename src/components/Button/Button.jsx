import { useState } from "react"

const Button =({text, valueModal})=>{
    const closeModal = valueModal
    const [closeModal,setCloseModal] = useState(false)
    return(
        <button onClick={()=>{
            setCloseModal(true)
        }}>{text}</button>
    )
}