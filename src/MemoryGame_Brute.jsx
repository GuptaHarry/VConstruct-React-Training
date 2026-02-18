import { useState } from "react";
export default function MemoryGame({images}) {

  const [selected, setSelected] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);


  function handleClick(card) {
    
    if (matchedIds.includes(card.id)) return;
    if (selected.find(c => c.id === card.id)) return; // cant use includes bcz 1 element present before it. same card click logic;

    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      checkMatch(newSelected);
    }
  }

  function checkMatch([first, second]) {
    

    if (first.src === second.src) {
      setMatchedIds([ ...matchedIds  , first.id , second.id]);
      setSelected([]);
    }else{
        setSelected([first]);
    } 
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)", gap: 10 }}>
      {images.map(card => {
        const isVisible =
          matchedIds.includes(card.id) ||
          selected.find(c => c.id === card.id);

        return (
          <div
            key={card.id}
            onClick={() => handleClick(card)}
            style={{
              width: 100,
              height: 100,
              border: "1px solid black",
              cursor: "pointer"
            }}
          >
            {isVisible ? (
              <img src={card.src} alt="" width="100%" />
            ) : (
              <div style={{ background: "gray", height: "100%" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}


