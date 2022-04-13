import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [furniture, setFurniture] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{furniture.length} Great Design
        </h3>
        <List furniture={furniture} />
        <button onClick={() => setFurniture([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;