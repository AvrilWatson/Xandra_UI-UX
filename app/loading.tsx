import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Prepare Your Digital Canvas</Text>
          <Text style={styles.subtitle}>
            Let&aposs set up your recreation experience based on your artistic preferences
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressWrapper}>
          <View style={styles.progressBackground}>
            <View style={[styles.progressFill, { width: '30%' }]} />
          </View>
        </View>

        {/* Fun Knowledge Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons name="lightbulb" size={24} color="#ffffff" />
            </View>
            <Text style={styles.sectionTitle}>Fun Knowledge</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Pop Art exposes how we project personality onto products, a concept used in brand psychology today.
            </Text>
          </View>
        </View>

        {/* Back Button */}
        <View style={styles.backWrapper}>
          <Pressable onPress={() => {/* handle back navigation */}}>
            <Text style={styles.backText}>
              Oops. Changed my mind. Click here to go back.
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f4', // bg-stone-100
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#1f2937', // text-gray-800
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#4b5563', // text-gray-600
    textAlign: 'center',
  },
  progressWrapper: {
    width: '100%',
    maxWidth: 320,
    marginBottom: 32,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ca8a04',
    borderRadius: 4,
  },
  section: {
    width: '100%',
    maxWidth: 360,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ca8a04',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    color: '#374151', // text-gray-700
    lineHeight: 24,
  },
  backWrapper: {
    marginTop: 16,
  },
  backText: {
    fontSize: 16,
    color: '#6b7280', // text-gray-500
    textDecorationLine: 'underline',
  },
});
