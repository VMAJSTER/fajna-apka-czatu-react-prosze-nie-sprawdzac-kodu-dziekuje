import React from "react";
import "./styles.css";
import wiadomosci from "./components/Wiadomosci/";

function App() {
  const wiadomosci = [
    {
      id: 1,
      user: "Adam",
      tresc: "Hej",
      data: Date.now()
    },
    {
      id: 2,
      user: "Paweł",
      tresc: "Huj",
      data: Date.now()
    },
    {
      id: 3,
      user: "Kurwa bita",
      tresc: "e2ewqeqweqwe disa123",
      data: Date.now()
    }
  ];
  return (
    <div className="App">
      {wiadomosci.map((wiadomosc) => (
        <div>{wiadomosc.tresc}</div>
      ))}
    </div>
  );
}
export default App;
