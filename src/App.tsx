import { Box, Container, Heading, Text, FloraProvider, globalCss } from '@grupoboticario/flora-react'
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
      <Box
        css={{
          paddingBlock: '$9',
          color: '$medium-light-1'
        }}
      >
        <Container centerContent size="large">
          <Logo size="100" />
          <Heading as="h1" level={4} css={{ marginBlock: '$3' }}>
            Template Reactjs
          </Heading>
          <Text>Criado com CRA e Flora.ds</Text>
        </Container>
      </Box>
    </FloraProvider>
  )
}

export default App
