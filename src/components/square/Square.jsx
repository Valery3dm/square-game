import React, { useEffect, useState } from "react";

import "./Square.css";

const Square = ({ isStart, field, selectedFields, setSelectedFields }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setHovered(false);
  }, [field]);

  const handleHover = () => {
    if (isStart) {
      setHovered(!hovered);
      setSelectedFields([
        `row ${field.row} col ${field.col}`,
        ...selectedFields,
      ]);
    }
  };

  return (
    <div
      className={hovered ? "square-blue" : "square-white"}
      onMouseEnter={handleHover}
    />
  );
};

export default Square;
