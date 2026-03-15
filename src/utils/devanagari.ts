// All Devanagari consonants used in the keyboard
export const CONSONANTS = [
  "क", "ख", "ग", "घ", "ङ",
  "च", "छ", "ज", "झ", "ञ",
  "ट", "ठ", "ड", "ढ", "ण",
  "त", "थ", "द", "ध", "न",
  "प", "फ", "ब", "भ", "म",
  "य", "र", "ल", "व",
  "श", "ष", "स", "ह",
  "क्ष", "त्र", "ज्ञ",
  "ड़", "ढ़",
];

// Vowels that can stand alone as syllable initials
export const VOWEL_CONSONANTS = [
  "अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ",
];

export type LetterState = "correct" | "present" | "absent" | "empty" | "filled";

export interface TileData {
  consonant: string;
  matra: string;
  state: LetterState;
}

// Display the full syllable (consonant + matra)
export function syllableDisplay(consonant: string, matra: string): string {
  if (!consonant) return "";
  return consonant + matra;
}

// Check if two syllables have the same consonant
export function sameConsonant(a: string, b: string): boolean {
  return a === b;
}
