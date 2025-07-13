export interface Artwork {
  id: string;
  title: string;
  artist: string;
  period: string;
  medium: string;
  created: string;
  colors: string;
  image: string;
  tags: string[];
  description?: string;
}

// Sample artwork data with placeholder images
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "The Adoration of the Magi",
    artist: "Gentile da Fabriano",
    period: "Early Renaissance",
    medium: "Tempera on wood",
    created: "c. 1423",
    colors: "Rich earth tones, gold highlights",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=480&h=600&fit=crop&crop=center",
    tags: ["Renaissance", "Religious Art", "Masterpiece"],
    description:
      "This masterpiece represents the pinnacle of early Renaissance religious art, showcasing Gentile da Fabriano's mastery of tempera painting and his innovative use of gold leaf. The composition demonstrates the transition from medieval to Renaissance artistic principles, with its careful attention to human emotion and divine symbolism.",
  },
  {
    id: "2",
    title: "Portrait of a Lady",
    artist: "Leonardo da Vinci",
    period: "High Renaissance",
    medium: "Oil on canvas",
    created: "c. 1490-1495",
    colors: "Subtle earth tones, warm shadows",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=500&fit=crop&crop=center",
    tags: ["Renaissance", "Portrait", "Classical"],
  },
  {
    id: "3",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    period: "Early Renaissance",
    medium: "Tempera on canvas",
    created: "c. 1484-1486",
    colors: "Soft pastels, golden highlights",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center",
    tags: ["Renaissance", "Mythology", "Masterpiece"],
  },
  {
    id: "4",
    title: "The School of Athens",
    artist: "Raffaello Sanzio",
    period: "High Renaissance",
    medium: "Fresco",
    created: "c. 1509-1511",
    colors: "Harmonious earth tones, architectural whites",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center",
    tags: ["Renaissance", "Philosophy", "Fresco"],
  },
  {
    id: "5",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    period: "Dutch Golden Age",
    medium: "Oil on canvas",
    created: "c. 1665",
    colors: "Deep blues, luminous pearl whites",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=500&fit=crop&crop=center",
    tags: ["Baroque", "Portrait", "Dutch Masters"],
  },
  {
    id: "6",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    period: "Post-Impressionism",
    medium: "Oil on canvas",
    created: "1889",
    colors: "Vibrant blues, golden yellows",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop&crop=center",
    tags: ["Post-Impressionism", "Landscape", "Iconic"],
  },
];

export const getRandomArtworks = (
  count: number,
  excludeId?: string,
): Artwork[] => {
  const filtered = excludeId
    ? artworks.filter((art) => art.id !== excludeId)
    : artworks;
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find((art) => art.id === id);
};
