import { Box, Container, FloraProvider, globalCss, Text } from '@grupoboticario/flora-react'
import { Logo } from './components/Logo'

const globalStyle = globalCss({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%'
  }
})

function App() {
  globalStyle()

  return (
    <FloraProvider>
      <Box>
        <Container centerContent size="large">
          <Logo size="100" />
          <Text>Criado com CRA e Flora.ds</Text>
        </Container>
      </Box>
    </FloraProvider>
  )
}

export default App
