import { Container, FloraProvider, globalCss, Flex, Button, Box } from '@grupoboticario/flora-react'
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
          margin: 40
        }}
        gap="$12"
        justify="center"
      >
        <Container centerContent size="large">
          <Box>
            <Logo size="100" />
          </Box>
          <Box>
            <Button variant="success">Start Tour </Button>
          </Box>
          <Tour></Tour>
        </Container>
      </Flex>
    </FloraProvider>
  )
}

export default App
