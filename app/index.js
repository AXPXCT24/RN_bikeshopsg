import { View, ScrollView, SafeAreaView} from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import Welcome from "../components/welcome/Welcome";
import {COLORS, icons, images, SIZES} from "../constants";

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension ='100%' />
          ),
          headerTitle: "TuneUP",
        }}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1, padding: SIZES.medium,}} >
        <Welcome/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;