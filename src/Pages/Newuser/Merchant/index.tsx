import React, { useEffect, useState } from 'react'

import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamlist } from '../../../../App'
import { GradientContainer } from '../../../Components/Container'
import { Input } from '../../../Components/Input'
import { CustomButton } from '../../../Components/Button/Buttons'
type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamlist, 'splash'>;
export const Merchant = () => {

    const navigation = useNavigation<SplashScreenNavigationProp>()
    return (
        <GradientContainer >
            <View className='' style={{ width: "100%" }}>
                <View className='flex flex-col basis-3/4  justify-end items-center pt-10 mx-0 w-full top-0 pb-3 rounded-es-lg rounded-ee-lg'>
                    <View className='h-28 w-28 mb-5 rounded-full bg-slate-100'></View>
                    <Text className='font-bold text-cyan-100 text-2xl mt-5 mb-2 '>Get Started With Cashier</Text>
                    <Text className=" text-amber-300 text-xs">v.1.0</Text>
                    <View className='basis-2/4 w-full flex flex-col justify-center items-center'>
                        <Input placeholder='Enter Your Merchant Name' className='w-80' />
                        <Text className=" text-white text-sm my-2">&#xa9; Oktaax</Text>
                    </View>
                </View>
                <View className=' flex justify-end items-center' >
                    <CustomButton text='Next' onPress={() => navigation.navigate('starter', { username: 'jefy' })} btnColor='primary'>

                    </CustomButton>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('splash')} className='px-3 py-3 mx-3 rounded-lg flex justify-center mb-10 bg-cyan-600 w-10/12  '>
                        <Text className='text-white text-center'>Next</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </GradientContainer>
    )
}