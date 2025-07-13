import ArtDetails from '@/components/View_ArtDetails';
import ArtViewer from '@/components/View_ArtViewer';
import { useArtState } from '@/hooks/useArtState';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ViewIndex() {
  const { selectedArt, favorited, showDetails, toggleFavorite, toggleDetails } = useArtState();
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 600,
      delay: 200,
      useNativeDriver: true,
    }).start();
  }, [anim]);

  const translateY = anim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] });
  const opacity = anim;

  const { width } = Dimensions.get('window');
  const isLarge = width >= 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity,
            transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }],
          },
        ]}
      >
        <Text style={[styles.title, { fontSize: isLarge ? 32 : 24 }]}>Discover Your Soul&aposs Connection</Text>
        <Text style={[styles.subtitle, { fontSize: isLarge ? 18 : 14 }]}>
          Experience the timeless beauty of classical art and find the piece that speaks to your heart
        </Text>
      </Animated.View>

      {/* Main Content */}
      <Animated.View
        style={[
          styles.mainContent,
          {
            flexDirection: isLarge ? 'row' : 'column',
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        <View style={[styles.viewerWrapper, { justifyContent: isLarge ? 'flex-start' : 'center' }]}>  
          <ArtViewer artwork={selectedArt} favorited={favorited} onToggleFavorite={toggleFavorite} />
        </View>
        <View style={styles.detailsWrapper}>
          <ArtDetails
            artwork={selectedArt}
            favorited={favorited}
            showDetails={showDetails}
            onToggleFavorite={toggleFavorite}
            onToggleDetails={toggleDetails}
          />
        </View>
      </Animated.View>

    </ScrollView>
  );
}

const { width } = Dimensions.get('window');
const isLarge = width >= 768;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff7e6',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontWeight: '300',
    color: '#3d2f1c',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#6b5840',
    textAlign: 'center',
    maxWidth: 600,
  },
  mainContent: {
    maxWidth: 1120,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 32,
    flexDirection: isLarge ? 'row' : 'column',
  },
  viewerWrapper: {
    flex: isLarge ? 1 : 0,
    marginRight: isLarge ? 16 : 0,
    marginBottom: isLarge ? 0 : 16,
  },
  detailsWrapper: {
    flex: isLarge ? 1 : 0,
    marginLeft: isLarge ? 16 : 0,
  },
});
