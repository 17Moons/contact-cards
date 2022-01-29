import React from "react";
import contact from "../contact";
import Card from "./Card";

function createCard(person){
  return (<Card
    key ={person.id}
    name={person.name}
    phone={person.phone}
    source={person.source}
    email={person.email}
    />
  );
}

function App() {
  return (<div>
    <h1 className="heading">
      Meet the team
    </h1>
    {contact.map(createCard)}

  </div>);

}

export default App;
