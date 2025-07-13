import ArtGallerySelection from '@/components/Select_ArtGallerySelection';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ArtGallerySelection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3C7', // warm-50 equivalent
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
