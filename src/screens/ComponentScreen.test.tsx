import { cleanup, render } from '@testing-library/react-native'

import { ComponentsScreen } from './ComponentsScreen'

afterEach(cleanup)

it('renders a component screen', async () => {
  const { getByText } = render(<ComponentsScreen />)

  const text = getByText('Button variants')
  expect(text).toBeTruthy()

  const button = getByText('Button solid')
  expect(button).toBeTruthy()
})
