import { Box, Container, FloraProvider, globalCss, Text, Button, Flex } from '@grupoboticario/flora-react'
import React from 'react'

const Tour = () => {
  const globalStyle = globalCss({
    'html, body, body > div:first-child, div#__next, div#__next > div': {
      height: '100%'
    }
  })

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
          <Box>
            <Text size="bodyLargeStandard" color="$brand-1">
              Onboardind Flora.ds
            </Text>
            <Flex>
              <Button>Start Tour</Button>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </FloraProvider>
  )
}
export default Tour
