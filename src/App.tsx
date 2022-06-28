import { Container, FloraProvider, globalCss, Flex, Box } from '@grupoboticario/flora-react'
import { Logo } from './components/Logo'
import { Home } from './components/Home'

const globalStyle = globalCss({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%'
  }
})

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
