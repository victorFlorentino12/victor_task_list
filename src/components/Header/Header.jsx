import styles from'./Header.module.css'

export const Header = ()=>{
    return(
        <header>
            <div className={styles.header}>
                <h1 className={styles.title_1}>Organização</h1>
                <div className={styles.container_title_2}>
                    <h1 className={styles.title_}>Tarefas</h1>
                </div>
            </div>
        </header>
    )
}