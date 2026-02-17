import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  function handleClick(id) {
    setOpenId(prev => (prev === id ? null : id)); // toggle logic
  }

  return (
    <>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onClick={handleClick}
        />
      ))}
    </>
  );
}
