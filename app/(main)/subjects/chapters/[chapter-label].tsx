import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ChapterLable = () => {
  const data = useLocalSearchParams()
  console.log(data)
 
  return (
    <View>
      <Text>ChapterLable</Text>
    </View>
  )
}

export default ChapterLable