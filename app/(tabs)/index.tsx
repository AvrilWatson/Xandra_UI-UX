// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

// Your custom components, assumed to be converted to React Native too
import EmotionInput from '@/components/EmotionInput'; // Uncomment if you want to use the emotion input
import ArtworkGallery from '@/components/Land_ArtworkGallery'; // Uncomment if you want to use the gallery
import Header from '@/components/Land_Header';

export default function App() {
  const [emotion, setEmotion] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleEmotionSubmit = (emotionText: string) => {
    setEmotion(emotionText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80' }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        {/* Simple semi-transparent overlay instead of gradient */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.content}>
          <Header isListening={isListening} setIsListening={setIsListening} />

          <View style={styles.main}>
            <EmotionInput
              onEmotionSubmit={handleEmotionSubmit}
              isListening={isListening}
              setIsListening={setIsListening}
            />

            {emotion ? (
              <View style={styles.galleryWrapper}>
                <ArtworkGallery emotion={emotion} />
              </View>
            ) : null}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(250,239,230,0.8)',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 48,
  },
  main: {
    maxWidth: 600,
    alignSelf: 'center',
  },
  galleryWrapper: {
    marginTop: 32,
  },
});
