import { Container, FloraProvider, globalCss, Flex } from '@grupoboticario/flora-react'
import { Logo } from './components/Logo'
import Tour from './components/Tour'

const globalStyle = globalCss({
  'html, body, body > div:first-child, div#__next, div#__next > div': {
    height: '100%'
  }
})

function App() {
  globalStyle()

  return (
    <FloraProvider>
      <Flex
        align="center"
        css={{
          margin: 60
        }}
        gap="$12"
        justify="center"
      >
        <Container centerContent size="large">
          <Logo size="100" />
          <Tour></Tour>
        </Container>
      </Flex>
    </FloraProvider>
  )
}

export default App
