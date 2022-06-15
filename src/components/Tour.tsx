import { Box, Button, Card, Heading } from '@grupoboticario/flora-react'
import ReactJoyride, { Step } from 'react-joyride'

const steps: Step[] = [
  {
    content: (
      <Card className="mybox" css={{ width: 300, height: 400, margin: 10, backgroundColor: '$light-dark-2' }}>
        <Button size="small" variant="alert">
          Novo!
        </Button>
        <Heading level={4}>Olá! Você está em Compra Inteligente</Heading>
      </Card>
    ),
    locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
    placement: 'center',
    target: 'body'
  },
  {
    content: <h2>Saber Mais</h2>,
    floaterProps: {
      disableAnimation: true
    },
    spotlightPadding: 5,
    target: '.mybox'
  }
]

export const Tour = () => {
  return (
    <>
      <ReactJoyride
        steps={steps}
        continuous
        run
        callback={(props) => {
          // console.log(props)
        }}
      />
      <Box className="mybox" css={{ width: 419, height: 424, margin: 10, backgroundColor: '$brand-1' }}></Box>
    </>
  )
}

export default Tour
