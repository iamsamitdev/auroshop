import AsyncStorage from '@react-native-async-storage/async-storage'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function AuthLayout() {

  return (
    <>
        <Stack>
            <Stack.Screen
                name='login'
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='register'
                options={{ headerShown: false }}
            />
        </Stack>

        {/* Custom Statusbar */}
        <StatusBar style='light' backgroundColor='#161622' />
    </>
  )
}