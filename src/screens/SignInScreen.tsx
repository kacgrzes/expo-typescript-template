import { Box, Button, Center, Image, Text, useTheme } from 'native-base'
import { TextInput } from 'react-native'

import { ControlledCheckbox, ControlledInput } from '~components'
import { REGEX } from '~constants'
import { useCallback, useSignInForm, useNavigation, useTranslation, useRef } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { colors } = useTheme()
  const { t } = useTranslation()
  const passwordInputRef = useRef<TextInput>(null)

  const { control, error, errors, submit, isSubmitting } = useSignInForm()

  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])

  return (
    <Center px={8} flex={1}>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        height={24}
        alt="logo"
      />
      <ControlledInput
        isRequired
        returnKeyType="next"
        label={t('common.email_label')}
        control={control}
        errors={errors}
        name="email"
        keyboardType="email-address"
        autoCapitalize="none"
        onSubmitEditing={passwordInputRef.current?.focus}
        placeholder={t('common.email_placeholder')}
        rules={{
          required: t('form.required'),
          pattern: {
            value: REGEX.EMAIL,
            message: t('form.invalid_email_format'),
          },
        }}
      />

      <ControlledInput
        isRequired
        ref={passwordInputRef}
        returnKeyType="send"
        onSubmitEditing={submit}
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        name="password"
        type="password"
        autoCapitalize="none"
        placeholder={t('sign_in_screen.password_placeholder')}
        rules={{
          required: t('form.required'),
        }}
        mb={4}
      />

      <ControlledCheckbox
        control={control}
        errors={errors}
        name="confirm"
        label={t('sign_in_screen.remember_me')}
      />

      <Box mt={4} />
      <Button
        onPress={submit}
        isLoading={isSubmitting}
        size="lg"
        width="64"
        isDisabled={isSubmitting}
      >
        {t('sign_in_screen.sign_in')}
      </Button>
      <Box mt={8} />
      <Box alignItems="center">
        <Text>{t('sign_in_screen.dont_have_an_account')}</Text>
        <Box mt={2} />
        <Button size="lg" width="64" onPress={goToSignUp} variant="ghost">
          {t('sign_in_screen.sign_up')}
        </Button>
      </Box>
      <Box mt={12} />
      {!!error && <Text color={colors.error['500']}>{error}</Text>}
      {/* TODO: Remove this after implementing signing in with backend  */}
      <Text>Correct credentials</Text>
      <Text textAlign="center">Email: test@example.com{'\n'}Password: 123456</Text>
    </Center>
  )
}
