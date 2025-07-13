import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  mood: string;
}

interface ArtworkGalleryProps {
  emotion: string;
}

export default function ArtworkGallery({ emotion }: ArtworkGalleryProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
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
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>
          Finding artworks that match your emotions...
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Artwork }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>by {item.artist}</Text>
          </View>
          <Text style={styles.mood}>{item.mood}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.actionsRow}>
          <View style={styles.actionGroup}>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={20}
                color="#a16207"
              />
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="share-outline"
                size={20}
                color="#a16207"
              />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconGroup}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons
                name="eye-outline"
                size={18}
                color="#a16207"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialCommunityIcons
                name="download-outline"
                size={18}
                color="#a16207"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Artworks for your &quot{emotion}&quot mood
      </Text>
      <Text style={styles.subheading}>
        Curated pieces that resonate with your current emotional state
      </Text>
      <FlatList
        data={artworks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#92400e',
  },
  heading: {
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
    color: '#92400e',
    marginBottom: 4,
  },
  subheading: {
    textAlign: 'center',
    color: '#a16207',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 16,
    marginVertical: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#92400e',
  },
  artist: {
    color: '#a16207',
  },
  mood: {
    backgroundColor: 'rgba(250, 239, 230, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    color: '#92400e',
  },
  description: {
    color: '#92400e',
    marginBottom: 12,
    lineHeight: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionGroup: {
    flexDirection: 'row',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    marginLeft: 4,
    color: '#92400e',
    fontSize: 14,
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(250,239,230,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
