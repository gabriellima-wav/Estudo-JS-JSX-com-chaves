// Passando strings com aspas

import { getImageurl } from "./utils";

// Quando você quiser passar um atributo de string para a JSX, coloque-o entre aspas simples ou duplas:

/*export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
*/

// Mas e se você quiser especificar dinamicamente o atributo src ou alt? Você poderia usar um valor do JavaScript substituindo " e " por { e }:

export default function Avatar() {
  const avatar = 'https://.i;imgur.com/7vQD0fPs.jpg'
  const description = 'Gregorio Y. Zara'
  return (
    <img 
      className="avatar"
      src={avatar}
      alt={description}
    />
  )
}

/*export default function TodoList() {
  const name = "Hedy Lamarr'"
  return (
    <h1>{name}´s To do List </h1>
  )
}
*/

// Qualquer expressão JavaScript funcionará entre chaves, incluindo chamadas de função como formatDate():

const today = new Date(); 
function formatDate(date) {
  return new Intl.DateTimeFormant(
    'en-US',
    { weekday: 'long'}
  ).format(date);
}

export default function ToDoList() {
  return (
    <h1>TodoList for {formatDate(today)}</h1>
  );
}

// Uso de “chaves duplas”: CSS e outros objetos em JSX 

export default function ToDoList2(){
  return  (
    <ul style={
      {
      backgroundColor: 'black',
      color: 'pink'
      }
    }>
      <li>Improve the videophone</li>
      <li>Prepare aeronautica lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  )
}

/*const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
*/

/*export default function ToDoList3() {
  return (
    <div style={person.theme}>
      <h1>{person.name}´s Todos</h1>
      <img 
        className="avatar"
        src="https://.i;imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautica lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
*/  

// Challenge 1 of 3: Corrija o erro 

const person1 = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
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

// Challenge 2 of 3: Extraia informações para um objeto  

const person2 = {
  name: 'Gregorio Y. Zara',
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person2.theme}>
      <h1>{person2.name}'s Todos</h1>
      <img
        className="avatar"
        src={person2.imageUrl}
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

// Challenge 3 of 3: Escreva uma expressão entre chaves JSX 

/*const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={[baseUrl + person.imageId + person.imageId + person.imageSize + '.jpg' ]}
        
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

*/

// Challenge 3 of 3: Escreva uma expressão entre chaves JSX  - Bonus 

const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color:'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}` Todos</h1>
      <img
        className="avatar"
        src={getImageurl(person)}
        alt={person.name}
      />
      <ul>
      <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

    </div>
  );
}