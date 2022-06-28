import { Heading, Text } from '@grupoboticario/flora-react'
// Criando Steps
import { Steps, useOnboarding, OnboardingJourney } from '@grupoboticario/flora-shared-react-onboarding'

const steps = [
  {
    // target: '#onboarding-target-1', // ID do elemento que será focado
    title: (
      <Heading color="$brand-1" level={5}>
        Title
      </Heading>
    ),
    content: <Text size="bodyLargeStandard">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>,
    buttonClose: 'OK, entendi!',
    buttonNext: 'Saber mais'
  }
] as Steps

export const Home = () => {
  return (
    <div>
      <h1>Teste 1</h1>
      <OnboardingJourney />
    </div>
  )
}
