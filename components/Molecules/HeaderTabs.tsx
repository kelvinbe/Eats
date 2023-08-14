import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import HeaderButton from '../Atoms/HeaderButton'


const styles = StyleSheet.create({
  headerTabsContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')
  return (
    <View style={styles.headerTabsContainer}>
      <Text>
        <HeaderButton name='Delivery' activeTab={activeTab} setActiveTab={setActiveTab} textColor='white' bottonColor='black' />
        <HeaderButton name='Pick Up' activeTab={activeTab} setActiveTab={setActiveTab} textColor='black' bottonColor='white' />
      </Text>
    </View>
  )
}