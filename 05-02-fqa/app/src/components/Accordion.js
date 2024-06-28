import { useState } from "react";
import Item from "./Item";

export default function Accordion({ faqs }) {
  const [number, setNumber] = useState(1);
  if (number < 3) setNumber(number + 1);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item item={item} number={i} key={number} />
      ))}
    </div>
  );
}
