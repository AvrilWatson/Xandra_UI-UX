import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface EmotionInputProps {
  onEmotionSubmit: (emotion: string) => void;
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
}

const EmotionInput: React.FC<EmotionInputProps> = ({ onEmotionSubmit, isListening, setIsListening }) => {
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();
  
  const handleSubmit = () => {
    if (inputValue.trim()) {
      onEmotionSubmit(inputValue.trim());
      setInputValue('');
      Keyboard.dismiss();
    }
    router.push('/select');
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setInputValue('feeling peaceful and contemplative');
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How are you feeling{"\n"}
          <Text style={styles.highlight}>right now?</Text>
        </Text>
        <Text style={styles.subtitle}>
          Share your emotions and let me find the perfect artwork for your soul
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Describe your feelings in words..."
          placeholderTextColor="#A16207"
        />

        <View style={styles.icons}>  
          <TouchableOpacity
            onPress={handleVoiceInput}
            style={[styles.voiceBtn, isListening ? styles.voiceActive : {}]}
          >
            <MaterialCommunityIcons name="microphone" size={20} color={isListening ? '#ffffff' : '#92400E'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!inputValue.trim()}
            style={[styles.sendBtn, !inputValue.trim() && styles.disabled]}
          >
            <MaterialCommunityIcons name="send" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <MaterialCommunityIcons name="heart" size={16} color="#B45309" />
        <Text style={styles.footerText}>
          You are creating a cozy, private, and healing world of your own.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#7C2D12',
    textAlign: 'center',
    lineHeight: 36,
  },
  highlight: {
    color: '#EA580C',
    fontWeight: '300',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#EA580C',
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
    color: '#7C2D12',
    borderWidth: 1,
    borderColor: 'rgba(252,211,77,0.5)',
  },
  icons: {
    position: 'absolute',
    right: 16,
    top: '50%',
    flexDirection: 'row',
    transform: [{ translateY: -22 }],
    alignItems: 'center',
  },
  voiceBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FCD34D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  voiceActive: {
    backgroundColor: '#EA580C',
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EA580C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#B45309',
  },
});

export default EmotionInput;
