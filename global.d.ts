// global.d.ts
import 'nativewind/types' // นำเข้า types ของ NativeWind

declare module 'react-native' {
  interface ViewProps {
    className?: string; // เพิ่ม property className ให้ ViewProps
  }
  interface TextProps {
    className?: string; // เพิ่ม property className ให้ TextProps
  }
  interface ImageProps {
    className?: string; // เพิ่ม property className ให้ ImageProps
  }
  interface ScrollViewProps {
    className?: string; // เพิ่ม property className ให้ ScrollViewProps
  }
  interface SafeAreaViewProps {
    className?: string; // เพิ่ม property className ให้ SafeAreaViewProps
  }
  interface TextInputProps {
    className?: string; // เพิ่ม property className ให้ TextInputProps
  }
  interface TouchableOpacityProps {
    className?: string; // เพิ่ม property className ให้ TouchableOpacityProps
  }
  interface FlatListProps {
    className?: string; // เพิ่ม property className ให้ FlatListProps
  }
  interface SectionListProps {
    className?: string; // เพิ่ม property className ให้ SectionListProps
  }
}
