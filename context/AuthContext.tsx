import axios from "axios"
import { createContext, ReactNode } from "react"
import { BASE_URL } from "../config/config"
import { Alert } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "expo-router"

// Create Types
interface AuthContextType {
    register: (firstName: string, lastName: string, email: string, password: string) => void,
    login: (email: string, password: string) => void,
    logout: () => void,
}

interface AuthProviderProps {
    children: ReactNode,
}

// สร้าง Context Object
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children  }) => {

    // Navigation
    const navigation: any = useNavigation()

    // สร้างฟังก์ชันสำหรับการล็อกอิน (Login)
    const login = (email: string, password: string) => {
        navigation.navigate('(tabs)')
        // axios.post(`${BASE_URL}auth/login`, {
        //     "email":email,
        //     "password":password
        // }).then((response) => {
        //     // console.log(response.data.status)
        //     if(response.data.status === "ok") {
        //         // keep user logged in
        //         AsyncStorage.setItem('token', response.data.token)
        //         AsyncStorage.setItem('user', JSON.stringify(response.data.user))
        //         navigation.navigate('(tabs)')
        //     }else {
        //         Alert.alert("Error", response.data.message)
        //     }
        // }).catch((error) => {
        //     console.log(error)
        // })
    }

    // สร้างฟังก์ชันสำหรับการสมัครสมาชิก (Register)
    const register = (firstName: string, lastName: string, email: string, password: string) => {

        axios.post(`${BASE_URL}auth/register`, {
            "firstname":firstName,
            "lastname":lastName,
            "email":email,
            "password":password
        }).then((response) => {
            // console.log(response.data)
            if(response.data.status === "ok") {
               // keep user logged in
               navigation.navigate('login')
            }else {
                Alert.alert("Error", response.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    // สร้างฟังก์ชันสำหรับการล็อกเอาท์ (Logout)
    const logout = () => {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('user')
        navigation.navigate('login')
    }

    return (
        <AuthContext.Provider value={{ register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

