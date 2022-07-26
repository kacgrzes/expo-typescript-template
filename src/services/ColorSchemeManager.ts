import AsyncStorage from '@react-native-async-storage/async-storage'
import type { StorageManager, ColorMode } from 'native-base'

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      console.error(e)
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', String(value))
    } catch (e) {
      console.error(e)
    }
  },
}
