import { useState } from "react";

export default function Item({ item, number }) {
  const [isOpen, SetIsOpen] = useState(false);

  const handleOpen = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleOpen}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon" onClick={handleOpen}>
        {isOpen ? "-" : "+"}
      </p>
      <div className={isOpen ? "content-box" : "hide-box"}>{item.text}</div>
    </div>
  );
}
