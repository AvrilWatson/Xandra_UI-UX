import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ArtPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFavorite: boolean;
}

export default function ArtGallerySelection() {
  const [artPieces, setArtPieces] = useState<ArtPiece[]>([
    {
      id: '1',
      title: 'Abstract Harmony',
      description: 'A captivating piece that embodies artistic excellence and emotional depth',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60',
      isFavorite: false
    },
    {
      id: '2',
      title: 'Golden Meadows',
      description: 'A captivating piece that embodies artistic excellence and emotional depth',
      imageUrl: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=500&auto=format&fit=crop&q=60',
      isFavorite: false
    },
    {
      id: '3',
      title: 'Soul Portrait',
      description: 'A captivating piece that embodies artistic excellence and emotional depth',
      imageUrl: 'https://images.unsplash.com/photo-1577720643272-265f09367456?w=500&auto=format&fit=crop&q=60',
      isFavorite: false
    }
  ]);

  const router = useRouter();

  const gotoLoad=()=>{
    router.push('/loading');
  };

  const gotoView=()=>{
    router.push('/view');
  };

  const toggleFavorite = (id: string) => {
    setArtPieces(prev => prev.map(piece =>
      piece.id === id ? { ...piece, isFavorite: !piece.isFavorite } : piece
    ));
  };

  const refreshCollection = () => {
    // In a real app, fetch new items
    setArtPieces(prev => prev.map(piece => ({ ...piece, isFavorite: false })));
  };

  const renderItem = ({ item }: { item: ArtPiece }) => (
    <View style={styles.card}>
      <Pressable onPress={gotoView}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </Pressable>
      <Pressable
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <MaterialCommunityIcons
          name="heart"
          size={24}
          color={item.isFavorite ? '#F59E0B' : '#9CA3AF'}
          solid={item.isFavorite}
        />
      </Pressable>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Pressable style={styles.selectRow} onPress={gotoLoad}>
          <Text style={styles.selectText}>Select This Piece</Text>
          <View style={styles.selectIndicator} />
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.headerTitle}>What catches your soul? Tap to choose</Text>
        <Text style={styles.headerSubtitle}>Discover the perfect piece that speaks to your heart from our curated collection of artistic masterpieces</Text>

        <FlatList
          data={artPieces}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
          contentContainerStyle={styles.list}
        />

        <TouchableOpacity style={styles.refreshButton} onPress={refreshCollection}>
          <MaterialCommunityIcons name="refresh" size={20} color="#FFFFFF" />
          <Text style={styles.refreshText}>Refresh Collection</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBF5' /* warm-50 */ },
  wrapper: { padding: 16, alignItems: 'center' },
  headerTitle: { fontSize: 24, fontWeight: '500', color: '#92400E', textAlign: 'center', marginVertical: 12 },
  headerSubtitle: { fontSize: 14, color: '#C2410C', textAlign: 'center', marginBottom: 24, maxWidth: 300 },
  list: { paddingBottom: 24 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: '100%'
  },
  image: { width: '100%', height: 200 },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 6,
    elevation: 3
  },
  cardContent: { padding: 16 },
  cardTitle: { fontSize: 18, fontWeight: '500', color: '#92400E', marginBottom: 6 },
  cardDescription: { fontSize: 12, color: '#C2410C', marginBottom: 12 },
  selectRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  selectText: { fontSize: 14, color: '#D97706', fontWeight: '500' },
  selectIndicator: { width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: '#D97706' },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D97706',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 16
  },
  refreshText: { color: '#FFFFFF', fontSize: 14, marginLeft: 8 }
});
