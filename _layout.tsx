import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

const { Navigator } = createMaterialTopTabNavigator();

// Create the custom navigator
const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator
>(Navigator);

export default function AuthenticatedLayout() {
    const insets = useSafeAreaInsets();
    const state = useSelector((state: any) => state);

    return (
        <View style={{ flex: 1, backgroundColor: "#1D1D1B", paddingTop: insets.top }}>
            <MaterialTopTabs
                tabBarPosition="bottom"
                initialRouteName="camera"
                screenOptions={{
                    tabBarAndroidRipple: {
                        color: "transparent",
                        borderless: false,
                        radius: 0,
                    },
                    tabBarPressColor: "transparent",
                    tabBarStyle: {
                        backgroundColor: "#1D1D1B",
                        marginBottom: insets.bottom,
                        elevation: 0,
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0,
                        shadowRadius: 0,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "transparent",
                        width: 0,
                        height: 0,
                        elevation: 0,
                    },
                    tabBarLabelStyle: {
                        display: "none",
                    },
                }}
            >

                <MaterialTopTabs.Screen
                    name="tab1"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera-outline" size={28} color={"#fff"} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="camera"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera-outline" size={28} color={"#fff"} />
                        ),
                    }}
                />     <MaterialTopTabs.Screen
                    name="tab2"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="camera-outline" size={28} color={"#fff"} />
                        ),
                    }}
                />
            </MaterialTopTabs>
        </View>
    );
}
