import styles from './List.module.css';
import { useState } from 'react';
import img_caneta from '../../assets/caneta.svg';
import img_lixeiro from '../../assets/lixeiro.svg';
import { Form } from '../Form/Form';
import { Modal } from '../Modal/Modal';

export const List = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'criar funcionalidades do sistema',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'ir para academia',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar',
      isCompleted: false,
    },
    {
      id: 4,
      text: 'Comer',
      isCompleted: false,
    },
    {
      id: 5,
      text: 'Beber agua',
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({ id: null, text: '' });
  const [titleTodoModal, setTitleTodoModal] = useState('')

  const addList = (text) => {
    const newList = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
      },
    ];
    setTodos(newList);
  };

  const removeTudo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    
    setOpenModal(true);
  };

  const openModalWithTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setSelectedTodo({ id, text: todo.text });
    
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedTodo({ id: null, text: '' });
  };

  return (
    <div className={styles.list_container}>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div className={styles.list}>
        {todos.map((todo) => (
          <div className={styles.todo} key={todo.id}>
            <p>{todo.text}</p>
            <input type="checkbox" className={styles.checkbox} />
            <div className={styles.images}>
              <button onClick={() => {
                openModalWithTodo(todo.id)
                setTitleTodoModal('Você deseja editar esse item?')
            } 
        }>
                <img src={img_caneta} alt="caneta" />
              </button>
              <button onClick={() => {
                    setTitleTodoModal('Você deseja remover esse item?')  
                    openModalWithTodo(todo.id)
                    removeTudo(todo.id)}}>
                <img src={img_lixeiro} alt="lixeiro" />
              </button>
            </div>
          </div>
        ))}
        <Form addList={addList} />
        <Modal isOpen={openModal} onClose={closeModal} todoPart={selectedTodo.text} clickTodo={titleTodoModal}/>
      </div>
    </div>
  );
};
