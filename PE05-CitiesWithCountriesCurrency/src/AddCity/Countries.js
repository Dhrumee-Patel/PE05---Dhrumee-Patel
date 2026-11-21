import { ScrollView, StyleSheet, Text, View } from 'react-native'

const PRIMARY = '#1976D2'

export default function Countries({ countries = [] }) {
  if (countries.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.empty}>No saved countries!</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {countries.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.country}>{item.country}</Text>
          <Text style={styles.currency}>{item.currency}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center' },
  empty: {
    textAlign: 'center', fontSize: 20, paddingBottom: 10,
    borderBottomWidth: 2, borderBottomColor: PRIMARY,
  },
  row: { padding: 10, borderBottomWidth: 2, borderBottomColor: PRIMARY },
  country: { fontSize: 20 },
  currency: { color: 'rgba(0, 0, 0, 0.5)' },
})