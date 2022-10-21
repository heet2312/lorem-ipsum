import React, { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let count = parseInt(amount);
    if (amount <= 0) {
      count = 1;
    }
    if (amount >= 8) {
      count = 8;
    }
    setText(data.slice(0, count));
  };
  return (
    <>
      <section className="section-center">
        <h3>tried of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraph:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
