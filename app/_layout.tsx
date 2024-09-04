import React, { useEffect, useState} from 'react'
import { Stack, useNavigation } from 'expo-router'
import { useFonts } from 'expo-font';
import { AuthProvider } from '../context/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    })

    // const [token, setToken] = useState() as any

    // อ่าน token จาก AsyncStorage
    // const getToken = async () => {
    //     const navigation: any = useNavigation()
    //     try {
    //         const savedToken = await AsyncStorage.getItem('token')
    //         setToken(savedToken)
    //     } catch (error) {
    //         console.error("Failed to fetch token:", error)
    //     }

    //     // ถ้ามี token ให้ redirect ไปหน้า Home
    //     console.log(token)
    //     if(token !== null) {
    //         navigation.navigate('(tabs)')
    //     }
    // }

    // useEffect(() => {
    //     getToken()
    // }, [])

    useEffect(() => {
        if (error) throw error;
    }, [fontsLoaded, error])

    if (!fontsLoaded) return null

    if(!fontsLoaded && !error) return null
    
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen name='index' options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    )
}