import { FlatList, RefreshControl, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../../components/ProductCard'
import { useState } from 'react'

export default function Home() {

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        setRefreshing(true)
        // Fetch Data from API
        console.log('Fetching Data...')
        setRefreshing(false)
    }

    // Product Data
    const products: any = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 400,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            name: 'Product 5',
            price: 500,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            name: 'Product 6',
            price: 600,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            name: 'Product 7',
            price: 700,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            name: 'Product 8',
            price: 800,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 9,
            name: 'Product 9',
            price: 900,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 10,
            name: 'Product 10',
            price: 1000,
            image: 'https://via.placeholder.com/150'
        }

    ]

    return (
        <SafeAreaView className='px-4 my-6 bg-primary h-full'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <ProductCard
                        productname={item.name}
                        productprice={item.price}
                        productimage={item.image}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className="flex my-6 px-4 space-y-6">
                        <Text className="text-2xl font-semibold text-white">Products</Text>
                    </View>
                )
                }
                ListEmptyComponent={() => (
                    <Text className="text-center text-white">No products found</Text>
                )}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </SafeAreaView>
    )
}