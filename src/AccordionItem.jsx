import React from "react";

export default function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px" }}>
      
      <div
        onClick={() => onClick(item.id)}
        style={{
          padding: "1rem",
          cursor: "pointer",
          background: "#f0f0f0"
        }}
      >
        <p>{item.title}</p>
      </div>

      {isOpen && (
        <div style={{ padding: "1rem" }}>
          <p>{item.content}</p>
        </div>
      )}

    </div>
  );
}
