import { useState } from 'react'
import reactLogo from '/public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Zodiac from './Components/Zodiac/Zodiac.jsx'
import ZodiacData from './data/zodiac.json'

function App() {
  const name = "Nanjun";
  const fact = "11111";

  return (
    <>

      <section style={{ marginTop: "60px" }}>
        <Zodiac />
      </section>
    </>
  );
}

export default App;
