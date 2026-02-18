import React from "react";
import Comp1 from "./MemoryGame_Brute";
const images = [

  { id:1,
    src:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb"
  },
  { id:2,
  src:"https://images.unsplash.com/photo-1546842931-886c185b4c8c"
  },
  { id:3,
    src:"https://images.unsplash.com/photo-1520763185298-1b434c919102"
  },
  { id:4,
   src:"https://images.unsplash.com/photo-1442458017215-285b83f65851"
  },
  { id:5,
   src:"https://images.unsplash.com/photo-1496483648148-47c686dc86a8"
  },
  {
    id:6,
    src: "https://images.unsplash.com/photo-1591181520189-abcb0735c65d"
  },
  { id:7,
    src:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb"
  },
  { id:8,
  src:"https://images.unsplash.com/photo-1546842931-886c185b4c8c"
  },
  { id:9,
    src:"https://images.unsplash.com/photo-1520763185298-1b434c919102"
  },
  { id:10,
   src:"https://images.unsplash.com/photo-1442458017215-285b83f65851"
  },
  { id:11,
   src:"https://images.unsplash.com/photo-1496483648148-47c686dc86a8"
  },
  {
    id:12,
    src: "https://images.unsplash.com/photo-1591181520189-abcb0735c65d"
  }
];

function App() {
  return (
    <>
      <Comp1 images={images} />
    </>
  );
}

export default App;

