import React from 'react';


function Card(props) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.defaultProps = {
  title: "New Card",
  content: "Card content goes here"
}

export default Card



/******ORIGINAL CODE */
// /* eslint-disable no-unused-expressions */
// import React from 'react';

// function Card(props) {
//   // title, content
//   return (
//     <div className='Card'>
//       <h3>{props.title}</h3>
//       <p>{props.content}</p>
//     </div>
//   );
// }