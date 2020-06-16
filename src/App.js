import React from 'react';
import './App.css';
import List from './List'
import store from './STORE'

class App extends React.Component {

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;



/******ORIGINAL CODE */
// import React from 'react';
// import './App.css';
// import STORE from './STORE';

// // make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis={2}>
//         This is the content for the left `Split`.  Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         <Tooltip color='hotpink' message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip> 
//       </Split>
//       <Split color='#126BCC' className='right'>
//         This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur. 
//       </Split>
//     </main>
//   );
// }

// export default App;