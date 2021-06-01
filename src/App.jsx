import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)

  return (
    <>
      <h1>Color Selector!</h1>
      <div>Pick your color:</div>
      <p>Hue:</p>
      <input
        type="range"
        value={hue}
        max={360}
        min={0}
        onChange={(event) => setHue(parseInt(event.target.value))}
      />
      <p>Saturation:</p>
      <input
        type="range"
        value={saturation}
        max={360}
        min={0}
        onChange={(event) => setSaturation(parseInt(event.target.value))}
      />
      <p>Lightness:</p>
      <input
        type="range"
        value={lightness}
        max={360}
        min={0}
        onChange={(event) => setLightness(parseInt(event.target.value))}
      />
    </>
  )
}
