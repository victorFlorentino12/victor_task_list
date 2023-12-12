import styles from './Modal.module.css'

export const Modal = ({isOpen, todoPart, clickTodo, onClose})=>{
    
    if(isOpen === true){
        return(
            <div className={styles.modal_container}>
                <div className={styles.modal}>
                    <h1>{clickTodo}</h1>
                    <p>{todoPart}</p>
                    <button className={styles.btn_1} onClick={onClose}>Não</button>
                    <button className={styles.btn_2} onClick={onClose}>Sim</button> 
                </div>
            </div>
        )
    }
   else{
    return(
        null
    )
   }
}