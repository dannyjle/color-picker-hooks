import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * (359 - 1) + 1))
  const [saturation, setSaturation] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  const [lightness, setLightness] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )

  const newBackgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`

  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <>
      <main>
        <h1>Color Selector!</h1>
        <h4>Pick your color:</h4>
        {/* <h5>
          <button onClick={handleButtonClick}>Randomizer</button>
        </h5> */}
        <div className="colorBox" style={newStyle}>
          {`hsl(${hue},${saturation}%,${lightness}%)`}
        </div>
        <article>
          <p>Hue: {hue}</p>
          <input
            type="range"
            value={hue}
            max={360}
            min={0}
            onChange={(event) => setHue(parseInt(event.target.value))}
          />
          <p>Saturation: {saturation}</p>
          <input
            type="range"
            value={saturation}
            max={100}
            min={0}
            onChange={(event) => setSaturation(parseInt(event.target.value))}
          />
          <p>Lightness: {lightness}</p>
          <input
            type="range"
            value={lightness}
            max={100}
            min={0}
            onChange={(event) => setLightness(parseInt(event.target.value))}
          />
        </article>
      </main>
    </>
  )
}
