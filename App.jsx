import React from "react";
import { getImageUrl } from "./utils";

// Função Avatar com strings estáticas
function AvatarStatic() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fP.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

// Função Avatar com strings dinâmicas
function AvatarDynamic() {
  const avatar = "https://i.imgur.com/7vQD0fP.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

// Função TodoList com formatação de data
function TodoListWithDate() {
  const today = new Date();
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  return <h1>Todo List for {formatDate(today)}</h1>;
}

// Função ToDoList2 com CSS embutido
function TodoListStyled() {
  return (
    <ul style={{ backgroundColor: "black", color: "pink" }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautic lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

// Função ToDoList3 com estilo e imagem dinâmicos
const person1 = {
  name: "Gregorio Y. Zara",
  theme: { backgroundColor: "black", color: "pink" },
};
function TodoListWithTheme() {
  return (
    <div style={person1.theme}>
      <h1>{person1.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fP.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Challenge 2 of 3: Extraindo informações para um objeto
const person2 = {
  name: "Gregorio Y. Zara",
  imageUrl: "https://i.imgur.com/7vQD0fP.jpg",
  theme: { backgroundColor: "black", color: "pink" },
};
function TodoListWithPerson() {
  return (
    <div style={person2.theme}>
      <h1>{person2.name}'s Todos</h1>
      <img className="avatar" src={person2.imageUrl} alt={person2.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Challenge 3 of 3: Escrevendo expressão JSX com objeto e função
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: { backgroundColor: "black", color: "pink" },
};
function TodoListWithJSXExpression() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Exportando App com todos os componentes para exibição
export default function App() {
  return (
    <div>
      <h2>Avatar (Static)</h2>
      <AvatarStatic />
      <h2>Avatar (Dynamic)</h2>
      <AvatarDynamic />
      <h2>Todo List with Date</h2>
      <TodoListWithDate />
      <h2>Todo List (Styled)</h2>
      <TodoListStyled />
      <h2>Todo List with Theme</h2>
      <TodoListWithTheme />
      <h2>Todo List with Person Info</h2>
      <TodoListWithPerson />
      <h2>Todo List with JSX Expression</h2>
      <TodoListWithJSXExpression />
    </div>
  );
}
