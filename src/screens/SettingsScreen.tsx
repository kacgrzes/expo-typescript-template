import { ScrollView, Text, Button, Center } from 'native-base'

import { colorSchemesList } from '~constants'
import { useAuth, useColorScheme } from '~hooks'

export const SettingsScreen = (): JSX.Element => {
  const { setColorSchemeSetting, colorSchemeSetting } = useColorScheme()
  const { signOut } = useAuth()

  return (
    <ScrollView>
      <Center>
        <Text fontSize="2xl" bold mb={2}>
          Current theme: {colorSchemeSetting}
        </Text>
        {colorSchemesList.map((scheme) => {
          const isSelected = scheme === colorSchemeSetting

          return (
            <Button
              size="lg"
              width="64"
              key={scheme}
              mb={2}
              // eslint-disable-next-line react/jsx-no-bind
              onPress={() => setColorSchemeSetting(scheme)}
            >
              <Text>{`${scheme}${isSelected ? ' - selected' : ''}`}</Text>
            </Button>
          )
        })}

        <Button colorScheme="danger" mt={8} size="lg" width="64" onPress={signOut}>
          Sign out!
        </Button>
      </Center>
    </ScrollView>
  )
}
