export interface Syllable {
  consonant: string;
  matra: string;
}

export type Word = Syllable[];

export const WORDS: Word[] = [
  // ंअंडली - group
  [
    { consonant: "ं", matra: "" },
    { consonant: "अ", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "ल", matra: "ी" },
  ],
  // अँगड़ाई - stretch
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "ड", matra: "़ा" },
    { consonant: "ई", matra: "" },
  ],
  // अँगरखा - tunic
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ख", matra: "ा" },
  ],
  // अँगरखा - warm coat
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ख", matra: "ा" },
  ],
  // अँगरेज - british
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "" },
  ],
  // अँगरेजी - english
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "ी" },
  ],
  // अँगीकार - recognition
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अँग्रेज - englishman
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "" },
  ],
  // अँगड़ाई - stretch the limbs
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ग", matra: "" },
    { consonant: "ड़", matra: "ा" },
    { consonant: "ई", matra: "" },
  ],
  // अँधियारा - darkness
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "ध", matra: "ि" },
    { consonant: "य", matra: "ा" },
    { consonant: "र", matra: "ा" },
  ],
  // अँशुमाली - sun
  [
    { consonant: "अ", matra: "ँ" },
    { consonant: "श", matra: "ु" },
    { consonant: "म", matra: "ा" },
    { consonant: "ल", matra: "ी" },
  ],
  // अंककार - statistician
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंकगत - in the lap
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अंकटाड - unctad
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "ट", matra: "ा" },
    { consonant: "ड", matra: "" },
  ],
  // अंकनीय - to be marked
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "न", matra: "ी" },
    { consonant: "य", matra: "" },
  ],
  // अंकमाला - necklace
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "म", matra: "ा" },
    { consonant: "ल", matra: "ा" },
  ],
  // अंकवार - lap
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंकसूची - scoresheet
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "" },
    { consonant: "स", matra: "ू" },
    { consonant: "च", matra: "ी" },
  ],
  // अंकुरण - germination
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "ु" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अंकुशित - controlled
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अंगघात - paralysis
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "घ", matra: "ा" },
    { consonant: "त", matra: "" },
  ],
  // अंगघात - palsy
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "घ", matra: "ा" },
    { consonant: "त", matra: "" },
  ],
  // अंगघाती - paralytical
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "घ", matra: "ा" },
    { consonant: "त", matra: "ी" },
  ],
  // अंगघाती - paralytic
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "घ", matra: "ा" },
    { consonant: "त", matra: "ी" },
  ],
  // अंगचारी - close friend
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "च", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंगधारी - living being
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "ध", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंगभूत - integral
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "भ", matra: "ू" },
    { consonant: "त", matra: "" },
  ],
  // अंगमारी - blight
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "म", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंगरखा - vest
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ख", matra: "ा" },
  ],
  // अंगरखा - frock
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ख", matra: "ा" },
  ],
  // अंगरखा - vestment
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ख", matra: "ा" },
  ],
  // अंगरेज़ - englishman
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "़" },
  ],
  // अंगीकार - adoption
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंगीकार - acknowledgement
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंगीकार - confession
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंगीकार - acceptance
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंगीकृत - adoptive
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "क", matra: "ृ" },
    { consonant: "त", matra: "" },
  ],
  // अंगीगार - adoption
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "ग", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंगीवाची - holonymy
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "ी" },
    { consonant: "व", matra: "ा" },
    { consonant: "च", matra: "ी" },
  ],
  // अंग्रेज - english
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "" },
  ],
  // अंग्रेज - sassenach
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "" },
  ],
  // अंग्रेज - pommy
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "" },
  ],
  // अंग्रेज़ - the british
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "़" },
  ],
  // अंग्रेज़ी - british
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "़ी" },
  ],
  // अंग्रेजी - english
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "े" },
    { consonant: "ज", matra: "ी" },
  ],
  // अंटाचित - senseless
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ट", matra: "ा" },
    { consonant: "च", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अंठानवे - xcviii
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ठ", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "व", matra: "े" },
  ],
  // अंठानवे - ninety eight
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ठ", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "व", matra: "े" },
  ],
  // अंडकोष - ball
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "क", matra: "ो" },
    { consonant: "ष", matra: "" },
  ],
  // अंडखोल - eggshell
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "ख", matra: "ो" },
    { consonant: "ल", matra: "" },
  ],
  // अंडाकार - ovoid
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ड", matra: "ा" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंडाकार - oblong
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ड", matra: "ा" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंतःपट - curtain
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "ः" },
    { consonant: "प", matra: "" },
    { consonant: "ट", matra: "" },
  ],
  // अंतःपुर - harem
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "ः" },
    { consonant: "प", matra: "ु" },
    { consonant: "र", matra: "" },
  ],
  // अंतःस्थ - interior
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "ः" },
    { consonant: "स", matra: "्" },
    { consonant: "थ", matra: "" },
  ],
  // अंतःस्थ - intermediate
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "ः" },
    { consonant: "स", matra: "्" },
    { consonant: "थ", matra: "" },
  ],
  // अंतकारी - terminal
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंतकारी - fatal
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंतकाल - time
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंततम - latest
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "त", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अंतभाग - termination
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "भ", matra: "ा" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरंग - interior
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरंग - private
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरंग - privy
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरंग - versant
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरंग - insider
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरण - transference
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अंतरांग - viscus
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरांग - viscera
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरांग - entrails
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरांग - innards
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरांग - internal organ
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अंतरांगी - visceral
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "ी" },
  ],
  // अंतराल - time lapse
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - cusp
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - hiatus
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - time lag
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - spacing
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - lag
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - discontinuity
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - lacuna
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - interregnum
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतराल - interval
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ल", matra: "" },
  ],
  // अंतरिक - in
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ि" },
    { consonant: "क", matra: "" },
  ],
  // अंतरिती - transferee
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ि" },
    { consonant: "त", matra: "ी" },
  ],
  // अंतरिम - interim
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ि" },
    { consonant: "म", matra: "" },
  ],
  // अंतरीप - cape
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ी" },
    { consonant: "प", matra: "" },
  ],
  // अंतरीप - headland
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ी" },
    { consonant: "प", matra: "" },
  ],
  // अंतरीय - differential
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ी" },
    { consonant: "य", matra: "" },
  ],
  // अंतरीय - inner
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "ी" },
    { consonant: "य", matra: "" },
  ],
  // अंतस्थ - intermedial
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "" },
    { consonant: "स", matra: "्" },
    { consonant: "थ", matra: "" },
  ],
  // अंतेवासी - boarder
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "त", matra: "े" },
    { consonant: "व", matra: "ा" },
    { consonant: "स", matra: "ी" },
  ],
  // अंदरूनी - internal
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "द", matra: "" },
    { consonant: "र", matra: "ू" },
    { consonant: "न", matra: "ी" },
  ],
  // अंदरूनी - inner
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "द", matra: "" },
    { consonant: "र", matra: "ू" },
    { consonant: "न", matra: "ी" },
  ],
  // अंदरूनी - inward
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "द", matra: "" },
    { consonant: "र", matra: "ू" },
    { consonant: "न", matra: "ी" },
  ],
  // अंधकार - gloom
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंधकार - obscureness
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंधकार - obscurity
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अंधाधुंध - indiscriminate
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "ा" },
    { consonant: "ध", matra: "ुं" },
    { consonant: "ध", matra: "" },
  ],
  // अंधाधुंध - sweeping
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "ा" },
    { consonant: "ध", matra: "ुं" },
    { consonant: "ध", matra: "" },
  ],
  // अंधाधुंध - blind
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "ा" },
    { consonant: "ध", matra: "ुं" },
    { consonant: "ध", matra: "" },
  ],
  // अंधापन - blindness
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "ध", matra: "ा" },
    { consonant: "प", matra: "" },
    { consonant: "न", matra: "" },
  ],
  // अंपायर - ump
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "प", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अंपायर - umpire
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "प", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अंशदाता - contributor
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "द", matra: "ा" },
    { consonant: "त", matra: "ा" },
  ],
  // अंशदान - contribution
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "द", matra: "ा" },
    { consonant: "न", matra: "" },
  ],
  // अंशदायी - contributory
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "द", matra: "ा" },
    { consonant: "य", matra: "ी" },
  ],
  // अंशधारी - share holder
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "ध", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंशधारी - stockholder
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "ध", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंशधारी - shareowner
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "" },
    { consonant: "ध", matra: "ा" },
    { consonant: "र", matra: "ी" },
  ],
  // अंशांकन - calibration
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "ां" },
    { consonant: "क", matra: "" },
    { consonant: "न", matra: "" },
  ],
  // अंशुमान - the sun
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "श", matra: "ु" },
    { consonant: "म", matra: "ा" },
    { consonant: "न", matra: "" },
  ],
  // अंसपेशी - musculus pectoralis
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "े" },
    { consonant: "श", matra: "ी" },
  ],
  // अंसपेशी - pectoral
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "े" },
    { consonant: "श", matra: "ी" },
  ],
  // अंसपेशी - pectoralis
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "े" },
    { consonant: "श", matra: "ी" },
  ],
  // अंसपेशी - pectoral muscle
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "े" },
    { consonant: "श", matra: "ी" },
  ],
  // अंसपेशी - pecs
  [
    { consonant: "अ", matra: "ं" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "े" },
    { consonant: "श", matra: "ी" },
  ],
  // अऔरत - she
  [
    { consonant: "अ", matra: "" },
    { consonant: "औ", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अकंचन - pauper
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ं" },
    { consonant: "च", matra: "" },
    { consonant: "न", matra: "" },
  ],
  // अकड़न - stiffness
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "ड", matra: "़" },
    { consonant: "न", matra: "" },
  ],
  // अकथित - untold
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "थ", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अकथ्य - unutterable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "थ", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकरण - inactivity
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकरण - inactiveness
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकरण - inaction
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकर्म - inaction
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "म", matra: "" },
  ],
  // अकर्म - inactivity
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "म", matra: "" },
  ],
  // अकर्म - inactiveness
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "म", matra: "" },
  ],
  // अकर्मी - wicked
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "म", matra: "ी" },
  ],
  // अकाचित - unvitrified
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "च", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अकाट्य - compelling
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ट", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकाट्य - irrefutable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ट", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकाट्य - watertight
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ट", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकाट्य - unassailable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ट", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकाट्य - cogent
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "ट", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकादमी - academy
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "द", matra: "" },
    { consonant: "म", matra: "ी" },
  ],
  // अकारण - motiveless
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकारण - unprovoked
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकारण - wanton
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
  ],
  // अकार्य - inaction
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकार्य - inactiveness
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकार्य - inactivity
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकिंचन - pauper
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "िं" },
    { consonant: "च", matra: "" },
    { consonant: "न", matra: "" },
  ],
  // अकिलीज़ - achilles
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ि" },
    { consonant: "ल", matra: "ी" },
    { consonant: "ज", matra: "़" },
  ],
  // अकिशिआ - acacia tree
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ि" },
    { consonant: "श", matra: "ि" },
    { consonant: "आ", matra: "" },
  ],
  // अकीयाई - achaian
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ी" },
    { consonant: "य", matra: "ा" },
    { consonant: "ई", matra: "" },
  ],
  // अकीयाई - achaean
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ी" },
    { consonant: "य", matra: "ा" },
    { consonant: "ई", matra: "" },
  ],
  // अकीर्ति - opprobrium
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ी" },
    { consonant: "र", matra: "्" },
    { consonant: "त", matra: "ि" },
  ],
  // अकुलीन - lowborn
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "ल", matra: "ी" },
    { consonant: "न", matra: "" },
  ],
  // अकुशल - bad
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - untactful
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - inept
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - inexpert
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - tactless
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - maladroit
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - inapt
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - unskilled
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकुशल - unmethodical
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ु" },
    { consonant: "श", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अकृरित - untilled
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ृ" },
    { consonant: "र", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अकृषित - untamed
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ृ" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अकृषित - uncultivated
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ृ" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अकृष्य - uncultivable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ृ" },
    { consonant: "ष", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकृष्य - uncultivatable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ृ" },
    { consonant: "ष", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अकेडिया - acadia
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "े" },
    { consonant: "ड", matra: "ि" },
    { consonant: "य", matra: "ा" },
  ],
  // अकेशिया - acacia
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "े" },
    { consonant: "श", matra: "ि" },
    { consonant: "य", matra: "ा" },
  ],
  // अकोमल - untender
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "ो" },
    { consonant: "म", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अक्खड़ - impudent
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ख", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // अक्खड़ - rude
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ख", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // अक्खड़ - insolent
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ख", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // अक्खड़ - rebellious
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ख", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // अक्खड़ - bumptious
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ख", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // अक्रिय - inert
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "य", matra: "" },
  ],
  // अक्रिय - inoperative
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "य", matra: "" },
  ],
  // अक्रोट - wallnut
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "र", matra: "ो" },
    { consonant: "ट", matra: "" },
  ],
  // अक्लांत - unwearied
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ां" },
    { consonant: "त", matra: "" },
  ],
  // अक्लांत - unweary
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ां" },
    { consonant: "त", matra: "" },
  ],
  // अक्लांत - untired
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ां" },
    { consonant: "त", matra: "" },
  ],
  // अक्लोम - abranchial
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ो" },
    { consonant: "म", matra: "" },
  ],
  // अक्लोम - abranchious
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ो" },
    { consonant: "म", matra: "" },
  ],
  // अक्लोम - gill less
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ो" },
    { consonant: "म", matra: "" },
  ],
  // अक्लोम - abranchiate
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ल", matra: "ो" },
    { consonant: "म", matra: "" },
  ],
  // अक्षत - virginal
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षत - untouched
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षत - intact
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षत - unhurt
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षत - unimpaired
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षत - inviolate
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "त", matra: "" },
  ],
  // अक्षम - inefficient
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - null
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - unqualified
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - incompetent
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - inert
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - incapable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षम - handicapped
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // अक्षय - undisintegratable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "य", matra: "" },
  ],
  // अक्षय - unfailing
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "य", matra: "" },
  ],
  // अक्षर - syllable
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षर - letter
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षर - font
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षर - character
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षर - consonant
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षर - type
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्षांश - latitude
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "ष", matra: "ां" },
    { consonant: "श", matra: "" },
  ],
  // अक्सर - manys the time
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्सर - frequent
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्सर - manys the time that
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्सर - many a time
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // अक्सीर - elixir
  [
    { consonant: "अ", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "स", matra: "ी" },
    { consonant: "र", matra: "" },
  ],
  // अखंडता - integrity
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "त", matra: "ा" },
  ],
  // अखंडता - wholeness
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "त", matra: "ा" },
  ],
  // अखंडित - exclusive
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखंडित - uncompartmented
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखंडित - undivided
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखंडित - nonsegmental
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखंडित - unsegmented
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखंडित - unbroken
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ं" },
    { consonant: "ड", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अखण्ड - intact
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "" },
    { consonant: "ण", matra: "्" },
    { consonant: "ड", matra: "" },
  ],
  // अखतीज - akhateej
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "" },
    { consonant: "त", matra: "ी" },
    { consonant: "ज", matra: "" },
  ],
  // अखबार - post
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "" },
    { consonant: "ब", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अखरोट - walnut
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "" },
    { consonant: "र", matra: "ो" },
    { consonant: "ट", matra: "" },
  ],
  // अख़बार - newspaper
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "़" },
    { consonant: "ब", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // अखाद्य - inedible
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ा" },
    { consonant: "द", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अखाद्य - uneatable
  [
    { consonant: "अ", matra: "" },
    { consonant: "ख", matra: "ा" },
    { consonant: "द", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अगणित - numberless
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "ण", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अगणित - uncounted
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "ण", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अगम्य - unreachable
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "म", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अगम्य - impassable
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "म", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अगम्य - inaccessible
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "म", matra: "्" },
    { consonant: "य", matra: "" },
  ],
  // अगस्त - august
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "स", matra: "्" },
    { consonant: "त", matra: "" },
  ],
  // अगस्त - aug
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "स", matra: "्" },
    { consonant: "त", matra: "" },
  ],
  // अगुआई - initiative
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "ु" },
    { consonant: "आ", matra: "" },
    { consonant: "ई", matra: "" },
  ],
  // अग्रणी - capital
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "ी" },
  ],
  // अग्रणी - groundbreaker
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "ी" },
  ],
  // अग्रणी - front runner
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "ी" },
  ],
  // अग्रणी - trailblazer
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "ी" },
  ],
  // अग्रता - priority
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "" },
    { consonant: "त", matra: "ा" },
  ],
  // अग्रांग - extremity
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "ां" },
    { consonant: "ग", matra: "" },
  ],
  // अग्रिम - foremost
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "म", matra: "" },
  ],
  // अग्रिम - advance
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "म", matra: "" },
  ],
  // अग्रिम - upfront
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "म", matra: "" },
  ],
  // अग्रीव - flange
  [
    { consonant: "अ", matra: "" },
    { consonant: "ग", matra: "्" },
    { consonant: "र", matra: "ी" },
    { consonant: "व", matra: "" },
  ],
  // अघटित - unreduced
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "" },
    { consonant: "ट", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अघोषित - unannounced
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "ो" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अघोषित - unstated
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "ो" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अघोषित - unpredicted
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "ो" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अघोषित - undeclared
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "ो" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अघोषित - unheralded
  [
    { consonant: "अ", matra: "" },
    { consonant: "घ", matra: "ो" },
    { consonant: "ष", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अचंचल - untrembling
  [
    { consonant: "अ", matra: "" },
    { consonant: "च", matra: "ं" },
    { consonant: "च", matra: "" },
    { consonant: "ल", matra: "" },
  ],
  // अचकित - unsurprised
  [
    { consonant: "अ", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "क", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // अचम्भा - surprise
  [
    { consonant: "अ", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "म", matra: "्" },
    { consonant: "भ", matra: "ा" },
  ],
];

export const VALID_WORDS = WORDS.filter(w => w.length === 4);

export function getDailyWord(): Word {
  const now = new Date();
  const start = new Date(2026, 0, 1);
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return VALID_WORDS[diff % VALID_WORDS.length];
}

export function getRandomWord(): Word {
  return VALID_WORDS[Math.floor(Math.random() * VALID_WORDS.length)];
}