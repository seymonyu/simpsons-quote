import React from "react";

function GetQuoteSimp({ simpsons }) {
  return (
    <div className="getQuote">
      <img src={simpsons.image} alt={simpsons.character} />
      <p> {simpsons.quote} </p>
    </div>
  );
}

export default GetQuoteSimp;
