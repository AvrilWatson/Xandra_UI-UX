import { Artwork, artworks, getRandomArtworks } from "@/assets/artData";
import { useCallback, useMemo, useState } from "react";

export interface ArtState {
  selectedArt: Artwork;
  favorited: boolean;
  showDetails: boolean;
  relatedArt: Artwork[];
}

export const useArtState = () => {
  const [selectedArt, setSelectedArt] = useState<Artwork>(artworks[0]);
  const [favorited, setFavorited] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const relatedArt = useMemo(() => {
    return getRandomArtworks(3, selectedArt.id);
  }, [selectedArt.id]);

  const selectArt = useCallback(
    (artwork: Artwork) => {
      setSelectedArt(artwork);
      setFavorited(favorites.has(artwork.id));
      setShowDetails(false);
    },
    [favorites],
  );

  const toggleFavorite = useCallback(() => {
    const newFavorites = new Set(favorites);
    if (favorited) {
      newFavorites.delete(selectedArt.id);
    } else {
      newFavorites.add(selectedArt.id);
    }
    setFavorites(newFavorites);
    setFavorited(!favorited);
  }, [favorited, selectedArt.id, favorites]);

  const toggleDetails = useCallback(() => {
    setShowDetails((prev) => !prev);
  }, []);

  return {
    selectedArt,
    favorited,
    showDetails,
    relatedArt,
    selectArt,
    toggleFavorite,
    toggleDetails,
  };
};
