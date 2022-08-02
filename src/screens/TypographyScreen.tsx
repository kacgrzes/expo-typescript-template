import { ScrollView, Center, Text, Heading, Switch } from 'native-base'

import { useColorMode } from '~hooks'

export const TypographyScreen = (): JSX.Element => {
  const { toggleColorMode } = useColorMode()

  return (
    <ScrollView>
      <Center>
        <Switch my={8} onChange={toggleColorMode} />
        <Text fontSize="xs">xs</Text>
        <Text fontSize="sm">sm</Text>
        <Text fontSize="md">md</Text>
        <Text fontSize="lg">lg</Text>
        <Text fontSize="xl">xl</Text>
        <Text fontSize="2xl">2xl</Text>
        <Text fontSize="3xl">3xl</Text>
        <Text fontSize="4xl">4xl</Text>
        <Text fontSize="5xl">5xl</Text>
        <Text fontSize="6xl">6xl</Text>

        <Heading size="xs">xs</Heading>
        <Heading size="sm">sm</Heading>
        <Heading size="md">md</Heading>
        <Heading size="lg">lg</Heading>
        <Heading size="xl">xl</Heading>
        <Heading size="2xl">2xl</Heading>
        <Heading size="3xl">3xl</Heading>
        <Heading size="4xl">4xl</Heading>
      </Center>
    </ScrollView>
  )
}
