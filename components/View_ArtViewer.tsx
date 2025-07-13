import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';

interface ArtViewerProps {
  artwork: { id: string; image: string; title?: string };
  favorited: boolean;
  onToggleFavorite: () => void;
}

export default function ArtViewer({ artwork, favorited, onToggleFavorite }: ArtViewerProps) {
  const { width } = Dimensions.get('window');
  const imageWidth = Math.min(width * 0.9, 480);
  const imageHeight = (imageWidth / 480) * 600;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          key={artwork.id}
          source={{ uri: artwork.image }}
          style={[styles.image, { width: imageWidth, height: imageHeight }]}
          resizeMode="cover"
        />

        <Pressable
          onPress={onToggleFavorite}
          style={({ pressed }) => [
            styles.favButton,
            { backgroundColor: favorited ? '#B8941F' : '#D4AF37' },
            pressed && styles.favButtonPressed,
          ]}
        >
          <MaterialCommunityIcons
            name="star"
            size={32}
            color={favorited ? '#ffffff' : '#000000'}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 40,
    elevation: 8,
  },
  image: {
    borderRadius: 12,
  },
  favButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 6,
    transitionDuration: '200ms',
  },
  favButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
});
