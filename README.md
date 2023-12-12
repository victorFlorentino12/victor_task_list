# Link
Link do site: [victor-task-list.vercel.app](https://victor-task-list.vercel.app/)
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Componente List

O componente `List` é o componente principal responsável por gerenciar a lista de tarefas.

## Estado

O estado inicial da lista de tarefas é definido utilizando o hook `useState`. Cada tarefa é representada como um objeto com as propriedades `id`, `text`, e `isCompleted`.

## Funções

- **addList(text):** Adiciona uma nova tarefa à lista.
- **removeTudo(id):** Remove uma tarefa da lista com base no `id`.
- **openModalWithTodo(id):** Abre o modal e define a tarefa selecionada.
- **closeModal():** Fecha o modal e limpa a tarefa selecionada.

## Renderização

O componente `List` renderiza a lista de tarefas. Cada tarefa possui botões para editar e remover. Ao clicar nesses botões, o modal é aberto, exibindo a tarefa selecionada.

## Componentes Filhos

- **Form:** Este componente é utilizado para adicionar novas tarefas à lista.
- **Modal:** Este componente é utilizado para exibir um modal que permite ao usuário editar ou remover uma tarefa.
