import { Box } from '@grupoboticario/flora-react'
import ReactJoyride, { Step } from 'react-joyride'

const steps: Step[] = [
  {
    content: <h2>Lets begin our journey!</h2>,
    locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
    placement: 'center',
    target: 'body'
  },
  {
    content: <h2>Sticky elements</h2>,
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
      <Box className="mybox" css={{ width: 300, height: 300, margin: 10, backgroundColor: 'DarkBlue' }} />
    </>
  )
}

export default Tour
