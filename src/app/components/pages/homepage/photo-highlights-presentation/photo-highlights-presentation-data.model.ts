export interface PhotoHighlightsPresentationData {
  photo?: MyPhoto;
  myName?: string;
  highlights?: TextPair[];
}

export interface MyPhoto {
  src?: string;
  altText?: string;
}

export interface TextPair {
  title?: string;
  description?: string
}