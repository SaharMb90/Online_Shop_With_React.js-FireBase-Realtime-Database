import React from "react";


function Trolley({ trolley, completePurchase }) {
  const trolleyItems = trolley.map((item, index) => (
    <li key={index}>
      {item.name} - ${item.price}
     
    </li>
  ));

  return (
    <div>
      <h1>Your Trolley</h1>
      {trolley.length > 0 ? (
        <div>
          <ul>{trolleyItems}</ul>
          <button onClick={completePurchase}>Complete Purchase</button>
        </div>
      ) : (
        <p>Your trolley is empty.</p>
      )}
    </div>
  );
}


export default Trolley;

