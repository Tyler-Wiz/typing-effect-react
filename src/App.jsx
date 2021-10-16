import React from 'react'
import  './App.css'
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="typing">
      <Typewriter
        options={{
        strings: [
          'Web Developer From Cambridge', 
          'UX Designer'
        ],
        cursorClassName:'blink',
        autoStart: true,
        loop: true,
        }}
      />
    </div>
  )
}

export default App
