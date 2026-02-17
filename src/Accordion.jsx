import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }) {
  const [openIds, setOpenIds] = useState([]);

  function handleClick(id) {
    // if present so remove
    // otherwise add
    if (openIds.indexOf(id) == -1) setOpenIds([...openIds, id]);
    else {
      setOpenIds(openIds.filter((item) => item !== id));
    }
  }

  return (
    <>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.indexOf(item.id) === -1 ? false : true}
          onClick={handleClick}
        />
      ))}
    </>
  );
}
