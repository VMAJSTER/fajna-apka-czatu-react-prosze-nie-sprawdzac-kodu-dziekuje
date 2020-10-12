import React from "react";
import "index.css";

function konwertujDateSukeBoNieDziala(data) {
  const dataa = new Date(data);
  return `${dataa.toLocaleDateString()}`;
}

function Wiadomosc({ wiadomosci }) {
  return (
    <div className="wiadomosc">
      <div className="user--wiadomosci">{wiadomosci.user}</div>
      <div className="zawartosc--wiadomosci">{wiadomosci.tresc}</div>
      <span className="message--time">
        {konwertujDateSukeBoNieDziala(wiadomosci.data)}
      </span>
    </div>
  );
}
export default Wiadomosc;
