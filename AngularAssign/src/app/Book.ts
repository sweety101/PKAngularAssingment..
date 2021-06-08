export interface Book  {
    id: string;
    volumeInfo: {
      title: string;
      subtitlesss: string;
      authors: string[];
      publisher: string;
      publishDate: string;
      description: string;
      averageRating: number;
      ratingsCount: number;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
    };
  }