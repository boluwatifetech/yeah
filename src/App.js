import React from 'react';

function App() {
    const followMe = function() {
        document.write('names')
    }
    return (
      <div>
        <button onClick={followMe}>click</button>
        <h1>i am a legend</h1>
      </div>
    )

}
export default App;