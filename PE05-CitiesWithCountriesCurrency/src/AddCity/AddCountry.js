import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const PRIMARY = '#1976D2'

export default function AddCountry({ navigation, addCountry }) {
  const [country, setCountry] = useState('')
  const [currency, setCurrency] = useState('')

  const submit = () => {
    if (country.trim() === '' || currency.trim() === '') {
      Alert.alert('Please complete form')
      return
    }
    addCountry({
      id: Date.now().toString(),
      country: country.trim(),
      currency: currency.trim(),
    })
    setCountry('')
    setCurrency('')
    navigation.navigate('Countries')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country name"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
        style={styles.input}
      />
      <TouchableOpacity onPress={submit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PRIMARY, justifyContent: 'center' },
  heading: { color: 'white', fontSize: 40, marginBottom: 10, alignSelf: 'center' },
  input: { margin: 10, backgroundColor: 'white', paddingHorizontal: 8, height: 50 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { color: 'white', fontSize: 18 },
})