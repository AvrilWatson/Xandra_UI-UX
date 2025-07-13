import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
}

export default function Header({ isListening, setIsListening }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.leftGroup}>
        {/* Plus Button */}
        <Pressable style={styles.button} onPress={() => { /* TODO: handle plus action */ }}>
          <MaterialCommunityIcons name="plus" size={24} color="#B45309" />
        </Pressable>

        {/* Listening Button */}
        <Pressable
          style={styles.button}
          onPress={() => setIsListening(!isListening)}
        >
          <MaterialCommunityIcons
            name="volume-high"
            size={24}
            color={isListening ? '#CA8A04' : '#B45309'}
          />
        </Pressable>

        {/* Listening Indicator */}
        {isListening && (
          <View style={styles.indicator}>
            <Text style={styles.indicatorText}>AI is listening...</Text>
          </View>
        )}
      </View>

      {/* More Button */}
      <Pressable style={styles.button} onPress={() => { /* TODO: handle more action */ }}>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="#B45309" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  indicator: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  indicatorText: {
    fontSize: 14,
    color: '#B45309',
  },
});
