import React from "react";

import './HoverList.css'

const HoverList = ({ selectedFields }) => (
  <div className="hover-list-wrapper">
    <h1>Hover squares</h1>
    <ul className="fields-list">
      {selectedFields.map((field, idx) => (
        <li key={idx} className='field'>{field}</li>
      ))}
    </ul>
  </div>
);

export default HoverList;
