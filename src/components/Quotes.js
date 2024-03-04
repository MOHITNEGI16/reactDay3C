import "./Quotes.css";

// import React from 'react'

function Quotes(props) {
  return (
    <div className="quotes">
      <p>{props.description}</p>
      <span>{props.author}</span>
    </div>
  );
}

export default Quotes;
