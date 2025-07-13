import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ArtworkGalleryProps {
  emotion: string;
}

interface Artwork {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  mood: string;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

export default function ArtworkGallery({ emotion }: ArtworkGalleryProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    // simulate fetch
    setTimeout(() => {
      const mockArtworks: Artwork[] = [
        {
          id: 1,
          title: 'Serene Waters',
          artist: 'Marina Chen',
          imageUrl:
            'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
          description: 'A peaceful landscape that captures the essence of tranquility',
          mood: 'peaceful',
        },
        {
          id: 2,
          title: 'Golden Hour Dreams',
          artist: 'Alex Rivera',
          imageUrl:
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
          description: 'Warm colors that evoke feelings of comfort and hope',
          mood: 'contemplative',
        },
        {
          id: 3,
          title: 'Misty Morning',
          artist: 'Sarah Johnson',
          imageUrl:
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
          description: 'A gentle scene that speaks to quiet moments of reflection',
          mood: 'serene',
        },
        {
          id: 4,
          title: 'Forest Whispers',
          artist: 'David Park',
          imageUrl:
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
          description: "Nature's embrace in its purest form",
          mood: 'grounding',
        },
      ];
      setArtworks(mockArtworks);
      setLoading(false);
    }, 1500);
  }, [emotion]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ca8a04" />
        <Text style={styles.loadingText}>
          Finding artworks that match your emotions...
        </Text>
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: Artwork; index: number }) => (
    <View style={[styles.card, { marginTop: index === 0 ? 0 : 16 }]}>      
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.info}
      >
        <View style={styles.infoHeader}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>by {item.artist}</Text>
          </View>
          <View style={styles.moodBadge}>
            <Text style={styles.moodText}>{item.mood}</Text>
          </View>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.actions}>
          <View style={styles.actionGroup}>
            <Pressable style={styles.iconButton} onPress={() => { /* handle save */ }}>
              <MaterialCommunityIcons name="heart-outline" size={20} color="#ca8a04" />
            </Pressable>
            <Pressable style={styles.iconButton} onPress={() => { /* handle share */ }}>
              <MaterialCommunityIcons name="share-variant" size={20} color="#ca8a04" />
            </Pressable>
          </View>
          <View style={styles.actionGroup}>
            <Pressable style={styles.circleButton} onPress={() => { /* handle view */ }}>
              <MaterialCommunityIcons name="eye-outline" size={18} color="#ca8a04" />
            </Pressable>
            <Pressable style={styles.circleButton} onPress={() => { /* handle download */ }}>
              <MaterialCommunityIcons name="download-outline" size={18} color="#ca8a04" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={artworks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#ca8a04',
  },
  list: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: CARD_WIDTH * 0.75,
  },
  info: {
    padding: 12,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1f2937',
  },
  artist: {
    fontSize: 14,
    color: '#4b5563',
  },
  moodBadge: {
    backgroundColor: 'rgba(250,204,21,0.3)',
    paddingHorizontal: 8,
    borderRadius: 12,
    justifyContent: 'center',
  },
  moodText: {
    fontSize: 12,
    color: '#ca8a04',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    marginVertical: 8,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 12,
  },
  circleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(250,204,21,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
