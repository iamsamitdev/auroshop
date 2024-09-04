import { Redirect, Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { icons } from '../../constants'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// สร้าง component TabIcon สำหรับแสดง icon แต่ละ tab
const TabIcon = ({ icon, color, name, focused }: any) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

export default function TabLayout() {

    // Read token from AsyncStorage
    const [token, setToken] = useState() as any
    const getToken = async () => {
        const token = await AsyncStorage.getItem('token')
        setToken(token)
    }
    
    getToken()

    // ถ้าไม่มี token ให้ redirect ไปหน้า Login
    if(token === null) {
        return <Redirect href='login' />
    }

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="Bookmark"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>

            {/* Custom Statusbar */}
            <StatusBar style='light' backgroundColor='#161622' />
        </>
    )
}