import { SignInScreen } from './SignInScreen'

import { cleanup, render } from '~utils/testUtils'

afterEach(cleanup)

describe('SignInScreen', () => {
  it('should render sign in screen', () => {
    render(<SignInScreen />)
  })
})
