import type { Artwork } from '@/assets/artData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface ArtDetailsProps {
  artwork: Artwork;
  favorited: boolean;
  showDetails: boolean;
  onToggleFavorite: () => void;
  onToggleDetails: () => void;
}

export default function ArtDetails({
  artwork,
  favorited,
  showDetails,
  onToggleFavorite,
  onToggleDetails,
}: ArtDetailsProps) {
  const router = useRouter();

  const handleFavoriteClick = () => {
    onToggleFavorite();
    router.push('/loading');
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'renaissance':
        return { backgroundColor: '#e8dcc6', color: '#5d4e37' };
      case 'religious art':
        return { backgroundColor: '#d4c5a9', color: '#4a3b28' };
      default:
        return { backgroundColor: '#c9b896', color: '#3d2f1c' };
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>{artwork.title}</Text>
        <Text style={styles.byline}>by {artwork.artist}</Text>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {artwork.tags.map((tag) => {
            const tagStyle = getTagColor(tag);
            return (
              <View key={tag} style={[styles.tag, { backgroundColor: tagStyle.backgroundColor }]}>  
                <Text style={[styles.tagText, { color: tagStyle.color }]}>{tag}</Text>
              </View>
            );
          })}
        </View>

        {/* Details */}
        <View style={styles.detailsSection}>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="brush" size={20} color="#ffffff" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Medium</Text>
              <Text style={styles.detailText}>{artwork.medium}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="calendar" size={20} color="#ffffff" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Created</Text>
              <Text style={styles.detailText}>{artwork.created}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="palette" size={20} color="#ffffff" style={styles.detailIcon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Dominant Colors</Text>
              <Text style={styles.detailText}>{artwork.colors}</Text>
            </View>
          </View>
        </View>

        {/* Toggle Details */}
        <Pressable onPress={onToggleDetails} style={styles.toggleButton}>
          <Text style={styles.toggleText}>Show Details</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="#b8860b"
            style={[styles.chevron, showDetails && styles.chevronRotated]}
          />
        </Pressable>

        {/* Description */}
        {showDetails && artwork.description && (
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{artwork.description}</Text>
          </View>
        )}

        {/* Actions */}
        <View style={styles.actionsRow}>
          <Pressable
            onPress={handleFavoriteClick}
            style={[styles.actionButton, { backgroundColor: favorited ? '#4A3B28' : '#59533D' }]}
          >
            <MaterialCommunityIcons name="heart" size={24} color="#ffffff" />
            <Text style={styles.actionText}>
              {favorited ? 'Added to Favorites!' : 'Wanna Create This One!'}
            </Text>
          </Pressable>

          <Pressable style={[styles.shareButton]}>  
            <MaterialCommunityIcons name="share-variant" size={24} color="#5d4e37" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 5,
  },
  title: { fontSize: 28, fontWeight: '300', color: '#3d2f1c', marginBottom: 8 },
  byline: { fontSize: 18, color: '#3d2f1c', marginBottom: 16 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  tag: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  tagText: { fontSize: 14, fontWeight: '500' },
  detailsSection: { marginBottom: 16 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  detailIcon: { backgroundColor: '#d4b583', borderRadius: 12, padding: 4, marginRight: 12 },
  detailTextContainer: { flex: 1 },
  detailLabel: { fontSize: 12, color: '#4a3b28', fontWeight: '500' },
  detailText: { fontSize: 16, color: '#3d2f1c' },
  toggleButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  toggleText: { fontSize: 16, color: '#b8860b', marginRight: 4 },
  chevron: { transform: [{ rotate: '0deg' }]},
  chevronRotated: { transform: [{ rotate: '180deg' }] },
  descriptionBox: { padding: 16, backgroundColor: '#fff7e6', borderRadius: 16, marginBottom: 16 },
  descriptionText: { color: '#3d2f1c', fontSize: 14, lineHeight: 20 },
  actionsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  actionButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 24, marginRight: 12 },
  actionText: { color: '#ffffff', fontSize: 16, marginLeft: 8, fontWeight: '500' },
  shareButton: { width: 56, height: 56, backgroundColor: '#fff7e6', borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
});
