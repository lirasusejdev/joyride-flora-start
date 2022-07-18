import { Container, FloraProvider, globalCss, Flex, Box, Button } from '@grupoboticario/flora-react'
import { Logo } from './components/Logo'
import { Home } from './components/Home'
import React, { useState, useEffect } from 'react'

const globalStyle = globalCss({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%'
  }
})

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  })
  return (
    <div>
      <Box>
        <p>Clicar {count} times</p>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <Home />
      </Box>
    </div>
  )
}

export default App
