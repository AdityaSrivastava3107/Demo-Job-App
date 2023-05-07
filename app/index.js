import { View, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, image, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex : 1, backgroundColor : COLORS.lightWhite}}>
           <Stack.Screen options={{
            headerStyle : {backgroundColor :  COLORS.lightWhite},
            headerShadowVisible : false,
            headerLeft : ()=>(
                <ScreenHeaderBtn iconUrl = {icons.menu} dimension= "60%"/> 
            ),
            headerRight : ()=>(
                <ScreenHeaderBtn iconUrl = {icons.profile} dimension= "100%"/> 
            ),
            headerTitle:"DemoApp"
            }}/>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={{padding : SIZES.medium, flex : 1}}>
                   <Welcome style={{}} />
                   <Nearbyjobs/>
                   <Popularjobs/>
                </View> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home; 