import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
}

export default function Header({ isListening, setIsListening }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.leftGroup}>
        <TouchableOpacity style={styles.button} onPress={() => {/* handle plus action */}}>
          <MaterialCommunityIcons name="plus" size={24} color="#92400e" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { animationDelay: 500 }]}
          onPress={() => setIsListening(!isListening)}
        >
          <MaterialCommunityIcons
            name="volume-high"
            size={24}
            color={isListening ? '#ca8a04' : '#92400e'}
          />
        </TouchableOpacity>

        {isListening && (
          <View style={styles.listeningBadge}>
            <Text style={styles.listeningText}>AI is listening...</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {/* handle more action */}}>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="#92400e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    // add shadow/glass effect if desired
  },
  listeningBadge: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  listeningText: {
    color: '#92400e',
    fontSize: 14,
    fontWeight: '500',
  },
});
