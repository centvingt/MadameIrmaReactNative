import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import AbrilDisplayBold from './assets/fonts/AbrilDisplay-Bold.otf'

import CardIMG from './assets/CardIMG.svg'
import Title from './assets/Title.svg'

export default function App() {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  let [fontsLoaded] = useFonts({
    'AbrilDisplay-Bold': AbrilDisplayBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        {/* <ImageBackground /> */}
        <Title width={windowWidth - 40} />
        <View style={styles.cardContainer}>
          <Text style={styles.cardSentence}>?</Text>
          <CardIMG
            style={styles.cardIMG}
            width={274 * 0.85}
            height={282 * 0.85}
          />
        </View>
        {/* <Button
            title="Irma, dis-moi tout&thinsp;!"
            titleStyle={styles.button}
          /> */}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Irma, dis-moi tout&thinsp;!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9797',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
  },
  cardContainer: {
    textAlign: 'center',
    backgroundColor: '#CCBF9D',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    width: '100%',
    borderRadius: 20,
  },
  cardSentence: {
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    fontFamily: 'AbrilDisplay-Bold',
    color: '#9F2929',
    fontSize: 120,
  },
  cardIMG: {
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#9F2929',
    padding: 20,
    fontSize: 20,
    borderRadius: 1000,
  },
  buttonText: {
    fontFamily: 'AbrilDisplay-Bold',
    textAlign: 'center',
    color: '#EFE7D5',
    fontSize: 20,
  },
})
