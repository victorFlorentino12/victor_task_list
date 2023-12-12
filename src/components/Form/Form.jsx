import { useState } from 'react'
import './Form.scss'

export const Form = ({addList})=>{
    const [value, setValue] = useState('');

    const handleSubimit = (e)=>{
        e.preventDefault();
        console.log(value);
        if(!value) return;
        addList(value);
        setValue("");
    }

    return(
        <div className='list_add'>
            
                    <form onSubmit={handleSubimit}>
                        <input type='text' placeholder='Adicione uma nova tarefa' value={value} onChange={(e)=>{setValue(e.target.value)} }/>
                        <button type='sunmit'>+</button>
                    </form>
        </div>
    )
}