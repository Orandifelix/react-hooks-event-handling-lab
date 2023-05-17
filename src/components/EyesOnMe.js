// Code EyesOnMe Component Here

import React from "react";

export default function EyesOnMe() {
  function handleFocus(event) {
    const message = event.type === "focus" ? "Good!" : "Hey! Eyes on me!";
    console.log(message);
  }

  return (
    <button onFocus={handleFocus} onBlur={handleFocus}>
      Eyes on me
    </button>
  );
}



// import React from 'react';

// export default function EyesOnMe() {
//   function handleFocus() {
//     console.log('Good!');
//   }

//   function handleBlur() {
//     console.log('Hey! Eyes on me!');
//   }

//   return (
//     <button onFocus={handleFocus} onBlur={handleBlur}>
//       Eyes on me
//     </button>
//   );
// }


