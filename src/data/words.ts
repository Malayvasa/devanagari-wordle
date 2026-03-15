export interface Syllable {
  consonant: string;
  matra: string;
}

export type Word = Syllable[];

// Each word is an array of 5 syllables: {consonant, matra}
// consonant: the base consonant letter
// matra: the vowel sign (matra) attached — empty string means inherent 'a' sound (अ)
//        special: "ा"=aa, "ि"=i, "ी"=ii, "ु"=u, "ू"=uu, "े"=e, "ै"=ai, "ो"=o, "ौ"=au
//        "्" = halant (virama, no vowel - used for consonant clusters)
//        "ं" = anusvara (nasal), "ः" = visarga
// Note: some slots use "ा" + "ं" combined - we simplify by treating anusvara as part of matra

export const WORDS: Word[] = [
  // कमल (kamal - lotus)
  [
    { consonant: "क", matra: "" },
    { consonant: "म", matra: "" },
    { consonant: "ल", matra: "" },
    { consonant: "क", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // नमस्ते (namaste)
  [
    { consonant: "न", matra: "" },
    { consonant: "म", matra: "" },
    { consonant: "स", matra: "्" },
    { consonant: "त", matra: "े" },
    { consonant: "न", matra: "" },
  ],
  // भारत (bharat - India)
  [
    { consonant: "भ", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "त", matra: "" },
    { consonant: "भ", matra: "ा" },
    { consonant: "र", matra: "" },
  ],
  // पानी (paani - water)
  [
    { consonant: "प", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "प", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "प", matra: "ा" },
  ],
  // पहाड़ (pahad - mountain)
  [
    { consonant: "प", matra: "" },
    { consonant: "ह", matra: "ा" },
    { consonant: "ड", matra: "़" },
    { consonant: "प", matra: "" },
    { consonant: "ह", matra: "ा" },
  ],
  // सपना (sapna - dream)
  [
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "" },
    { consonant: "न", matra: "ा" },
    { consonant: "स", matra: "" },
    { consonant: "प", matra: "" },
  ],
  // रास्ता (raasta - road/path)
  [
    { consonant: "र", matra: "ा" },
    { consonant: "स", matra: "्" },
    { consonant: "त", matra: "ा" },
    { consonant: "र", matra: "ा" },
    { consonant: "स", matra: "्" },
  ],
  // किताब (kitab - book)
  [
    { consonant: "क", matra: "ि" },
    { consonant: "त", matra: "ा" },
    { consonant: "ब", matra: "" },
    { consonant: "क", matra: "ि" },
    { consonant: "त", matra: "ा" },
  ],
  // दिल (dil - heart)
  [
    { consonant: "द", matra: "ि" },
    { consonant: "ल", matra: "" },
    { consonant: "द", matra: "ि" },
    { consonant: "ल", matra: "" },
    { consonant: "द", matra: "ि" },
  ],
  // घर (ghar - home)
  [
    { consonant: "घ", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "घ", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "घ", matra: "" },
  ],
  // मकान (makan - house)
  [
    { consonant: "म", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "म", matra: "" },
    { consonant: "क", matra: "ा" },
  ],
  // दरवाजा (darwaza - door) - 5 syllables
  [
    { consonant: "द", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ज", matra: "ा" },
    { consonant: "द", matra: "" },
  ],
  // तरकारी (tarkari - vegetable)
  [
    { consonant: "त", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "र", matra: "ी" },
    { consonant: "त", matra: "" },
  ],
  // परिवार (parivar - family)
  [
    { consonant: "प", matra: "" },
    { consonant: "र", matra: "ि" },
    { consonant: "व", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "प", matra: "" },
  ],
  // बाजार (bazar - market)
  [
    { consonant: "ब", matra: "ा" },
    { consonant: "ज", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ब", matra: "ा" },
    { consonant: "ज", matra: "ा" },
  ],
  // समाचार (samachar - news)
  [
    { consonant: "स", matra: "" },
    { consonant: "म", matra: "ा" },
    { consonant: "च", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "स", matra: "" },
  ],
  // विद्यालय (vidyalay - school)
  [
    { consonant: "व", matra: "ि" },
    { consonant: "द", matra: "्" },
    { consonant: "य", matra: "ा" },
    { consonant: "ल", matra: "" },
    { consonant: "य", matra: "" },
  ],
  // महाराज (maharaj - king)
  [
    { consonant: "म", matra: "" },
    { consonant: "ह", matra: "ा" },
    { consonant: "र", matra: "ा" },
    { consonant: "ज", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // कहानी (kahani - story)
  [
    { consonant: "क", matra: "" },
    { consonant: "ह", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "क", matra: "" },
    { consonant: "ह", matra: "ा" },
  ],
  // जवाब (jawab - answer)
  [
    { consonant: "ज", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ब", matra: "" },
    { consonant: "ज", matra: "" },
    { consonant: "व", matra: "ा" },
  ],
  // सवाल (sawal - question)
  [
    { consonant: "स", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ल", matra: "" },
    { consonant: "स", matra: "" },
    { consonant: "व", matra: "ा" },
  ],
  // रात्रि (ratri - night)
  [
    { consonant: "र", matra: "ा" },
    { consonant: "त", matra: "्" },
    { consonant: "र", matra: "ि" },
    { consonant: "र", matra: "ा" },
    { consonant: "त", matra: "्" },
  ],
  // आकाश (akash - sky)
  [
    { consonant: "आ", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "श", matra: "" },
    { consonant: "आ", matra: "" },
    { consonant: "क", matra: "ा" },
  ],
  // जंगल (jangal - forest)
  [
    { consonant: "ज", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "ल", matra: "" },
    { consonant: "ज", matra: "ं" },
    { consonant: "ग", matra: "" },
  ],
  // बादल (badal - cloud)
  [
    { consonant: "ब", matra: "ा" },
    { consonant: "द", matra: "" },
    { consonant: "ल", matra: "" },
    { consonant: "ब", matra: "ा" },
    { consonant: "द", matra: "" },
  ],
  // दोस्त (dost - friend)
  [
    { consonant: "द", matra: "ो" },
    { consonant: "स", matra: "्" },
    { consonant: "त", matra: "" },
    { consonant: "द", matra: "ो" },
    { consonant: "स", matra: "्" },
  ],
  // रोटी (roti - bread)
  [
    { consonant: "र", matra: "ो" },
    { consonant: "ट", matra: "ी" },
    { consonant: "र", matra: "ो" },
    { consonant: "ट", matra: "ी" },
    { consonant: "र", matra: "ो" },
  ],
  // मिठाई (mithai - sweets)
  [
    { consonant: "म", matra: "ि" },
    { consonant: "ठ", matra: "ा" },
    { consonant: "ई", matra: "" },
    { consonant: "म", matra: "ि" },
    { consonant: "ठ", matra: "ा" },
  ],
  // पत्थर (patthar - stone)
  [
    { consonant: "प", matra: "" },
    { consonant: "त", matra: "्" },
    { consonant: "थ", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "प", matra: "" },
  ],
  // नदी (nadi - river)
  [
    { consonant: "न", matra: "" },
    { consonant: "द", matra: "ी" },
    { consonant: "न", matra: "" },
    { consonant: "द", matra: "ी" },
    { consonant: "न", matra: "" },
  ],
  // फूल (phool - flower)
  [
    { consonant: "फ", matra: "ू" },
    { consonant: "ल", matra: "" },
    { consonant: "फ", matra: "ू" },
    { consonant: "ल", matra: "" },
    { consonant: "फ", matra: "ू" },
  ],
  // पत्ता (patta - leaf)
  [
    { consonant: "प", matra: "" },
    { consonant: "त", matra: "्" },
    { consonant: "त", matra: "ा" },
    { consonant: "प", matra: "" },
    { consonant: "त", matra: "्" },
  ],
  // तितली (titali - butterfly)
  [
    { consonant: "त", matra: "ि" },
    { consonant: "त", matra: "" },
    { consonant: "ल", matra: "ी" },
    { consonant: "त", matra: "ि" },
    { consonant: "त", matra: "" },
  ],
  // मछली (machli - fish)
  [
    { consonant: "म", matra: "" },
    { consonant: "छ", matra: "" },
    { consonant: "ल", matra: "ी" },
    { consonant: "म", matra: "" },
    { consonant: "छ", matra: "" },
  ],
  // हाथी (hathi - elephant)
  [
    { consonant: "ह", matra: "ा" },
    { consonant: "थ", matra: "ी" },
    { consonant: "ह", matra: "ा" },
    { consonant: "थ", matra: "ी" },
    { consonant: "ह", matra: "ा" },
  ],
  // शेर (sher - lion)
  [
    { consonant: "श", matra: "े" },
    { consonant: "र", matra: "" },
    { consonant: "श", matra: "े" },
    { consonant: "र", matra: "" },
    { consonant: "श", matra: "े" },
  ],
  // बंदर (bandar - monkey)
  [
    { consonant: "ब", matra: "ं" },
    { consonant: "द", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ब", matra: "ं" },
    { consonant: "द", matra: "" },
  ],
  // कुत्ता (kutta - dog)
  [
    { consonant: "क", matra: "ु" },
    { consonant: "त", matra: "्" },
    { consonant: "त", matra: "ा" },
    { consonant: "क", matra: "ु" },
    { consonant: "त", matra: "्" },
  ],
  // बिल्ली (billi - cat)
  [
    { consonant: "ब", matra: "ि" },
    { consonant: "ल", matra: "्" },
    { consonant: "ल", matra: "ी" },
    { consonant: "ब", matra: "ि" },
    { consonant: "ल", matra: "्" },
  ],
  // गाय (gay - cow)
  [
    { consonant: "ग", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "ग", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "ग", matra: "ा" },
  ],
  // चाय (chay - tea)
  [
    { consonant: "च", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "च", matra: "ा" },
    { consonant: "य", matra: "" },
    { consonant: "च", matra: "ा" },
  ],
  // दूध (dudh - milk)
  [
    { consonant: "द", matra: "ू" },
    { consonant: "ध", matra: "" },
    { consonant: "द", matra: "ू" },
    { consonant: "ध", matra: "" },
    { consonant: "द", matra: "ू" },
  ],
  // खाना (khana - food)
  [
    { consonant: "ख", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "ख", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "ख", matra: "ा" },
  ],
  // पीना (pina - to drink)
  [
    { consonant: "प", matra: "ी" },
    { consonant: "न", matra: "ा" },
    { consonant: "प", matra: "ी" },
    { consonant: "न", matra: "ा" },
    { consonant: "प", matra: "ी" },
  ],
  // सोना (sona - gold/to sleep)
  [
    { consonant: "स", matra: "ो" },
    { consonant: "न", matra: "ा" },
    { consonant: "स", matra: "ो" },
    { consonant: "न", matra: "ा" },
    { consonant: "स", matra: "ो" },
  ],
  // चाँद (chand - moon)
  [
    { consonant: "च", matra: "ाँ" },
    { consonant: "द", matra: "" },
    { consonant: "च", matra: "ाँ" },
    { consonant: "द", matra: "" },
    { consonant: "च", matra: "ाँ" },
  ],
  // तारा (tara - star)
  [
    { consonant: "त", matra: "ा" },
    { consonant: "र", matra: "ा" },
    { consonant: "त", matra: "ा" },
    { consonant: "र", matra: "ा" },
    { consonant: "त", matra: "ा" },
  ],
  // सूरज (suraj - sun)
  [
    { consonant: "स", matra: "ू" },
    { consonant: "र", matra: "" },
    { consonant: "ज", matra: "" },
    { consonant: "स", matra: "ू" },
    { consonant: "र", matra: "" },
  ],
  // धरती (dharti - earth)
  [
    { consonant: "ध", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "त", matra: "ी" },
    { consonant: "ध", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // हवा (hawa - wind/air)
  [
    { consonant: "ह", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ह", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ह", matra: "" },
  ],
  // आग (aag - fire)
  [
    { consonant: "आ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "आ", matra: "" },
    { consonant: "ग", matra: "" },
    { consonant: "आ", matra: "" },
  ],
  // बारिश (barish - rain)
  [
    { consonant: "ब", matra: "ा" },
    { consonant: "र", matra: "ि" },
    { consonant: "श", matra: "" },
    { consonant: "ब", matra: "ा" },
    { consonant: "र", matra: "ि" },
  ],
  // ठंड (thand - cold)
  [
    { consonant: "ठ", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "ठ", matra: "ं" },
    { consonant: "ड", matra: "" },
    { consonant: "ठ", matra: "ं" },
  ],
  // गर्मी (garmi - heat/summer)
  [
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "म", matra: "ी" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "्" },
  ],
  // सर्दी (sardi - winter/cold)
  [
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "द", matra: "ी" },
    { consonant: "स", matra: "" },
    { consonant: "र", matra: "्" },
  ],
  // मौसम (mausam - weather/season)
  [
    { consonant: "म", matra: "ौ" },
    { consonant: "स", matra: "" },
    { consonant: "म", matra: "" },
    { consonant: "म", matra: "ौ" },
    { consonant: "स", matra: "" },
  ],
  // रंग (rang - color)
  [
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "ं" },
    { consonant: "ग", matra: "" },
    { consonant: "र", matra: "ं" },
  ],
  // लाल (lal - red)
  [
    { consonant: "ल", matra: "ा" },
    { consonant: "ल", matra: "" },
    { consonant: "ल", matra: "ा" },
    { consonant: "ल", matra: "" },
    { consonant: "ल", matra: "ा" },
  ],
  // नीला (neela - blue)
  [
    { consonant: "न", matra: "ी" },
    { consonant: "ल", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "ल", matra: "ा" },
    { consonant: "न", matra: "ी" },
  ],
  // हरा (hara - green)
  [
    { consonant: "ह", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ह", matra: "" },
    { consonant: "र", matra: "ा" },
    { consonant: "ह", matra: "" },
  ],
  // पीला (peela - yellow)
  [
    { consonant: "प", matra: "ी" },
    { consonant: "ल", matra: "ा" },
    { consonant: "प", matra: "ी" },
    { consonant: "ल", matra: "ा" },
    { consonant: "प", matra: "ी" },
  ],
  // काला (kala - black)
  [
    { consonant: "क", matra: "ा" },
    { consonant: "ल", matra: "ा" },
    { consonant: "क", matra: "ा" },
    { consonant: "ल", matra: "ा" },
    { consonant: "क", matra: "ा" },
  ],
  // सफेद (safed - white)
  [
    { consonant: "स", matra: "" },
    { consonant: "फ", matra: "े" },
    { consonant: "द", matra: "" },
    { consonant: "स", matra: "" },
    { consonant: "फ", matra: "े" },
  ],
  // बड़ा (bada - big)
  [
    { consonant: "ब", matra: "" },
    { consonant: "ड", matra: "़ा" },
    { consonant: "ब", matra: "" },
    { consonant: "ड", matra: "़ा" },
    { consonant: "ब", matra: "" },
  ],
  // छोटा (chhota - small)
  [
    { consonant: "छ", matra: "ो" },
    { consonant: "ट", matra: "ा" },
    { consonant: "छ", matra: "ो" },
    { consonant: "ट", matra: "ा" },
    { consonant: "छ", matra: "ो" },
  ],
  // अच्छा (achha - good)
  [
    { consonant: "अ", matra: "" },
    { consonant: "च", matra: "्" },
    { consonant: "छ", matra: "ा" },
    { consonant: "अ", matra: "" },
    { consonant: "च", matra: "्" },
  ],
  // बुरा (bura - bad)
  [
    { consonant: "ब", matra: "ु" },
    { consonant: "र", matra: "ा" },
    { consonant: "ब", matra: "ु" },
    { consonant: "र", matra: "ा" },
    { consonant: "ब", matra: "ु" },
  ],
  // सच्चा (sachcha - true/honest)
  [
    { consonant: "स", matra: "" },
    { consonant: "च", matra: "्" },
    { consonant: "च", matra: "ा" },
    { consonant: "स", matra: "" },
    { consonant: "च", matra: "्" },
  ],
  // झूठ (jhooth - lie)
  [
    { consonant: "झ", matra: "ू" },
    { consonant: "ठ", matra: "" },
    { consonant: "झ", matra: "ू" },
    { consonant: "ठ", matra: "" },
    { consonant: "झ", matra: "ू" },
  ],
  // नया (naya - new)
  [
    { consonant: "न", matra: "" },
    { consonant: "य", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "य", matra: "ा" },
    { consonant: "न", matra: "" },
  ],
  // पुराना (purana - old)
  [
    { consonant: "प", matra: "ु" },
    { consonant: "र", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "प", matra: "ु" },
    { consonant: "र", matra: "ा" },
  ],
  // गाना (gana - song)
  [
    { consonant: "ग", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "ग", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "ग", matra: "ा" },
  ],
  // नाच (naach - dance)
  [
    { consonant: "न", matra: "ा" },
    { consonant: "च", matra: "" },
    { consonant: "न", matra: "ा" },
    { consonant: "च", matra: "" },
    { consonant: "न", matra: "ा" },
  ],
  // खेल (khel - game/play)
  [
    { consonant: "ख", matra: "े" },
    { consonant: "ल", matra: "" },
    { consonant: "ख", matra: "े" },
    { consonant: "ल", matra: "" },
    { consonant: "ख", matra: "े" },
  ],
  // जीत (jeet - victory)
  [
    { consonant: "ज", matra: "ी" },
    { consonant: "त", matra: "" },
    { consonant: "ज", matra: "ी" },
    { consonant: "त", matra: "" },
    { consonant: "ज", matra: "ी" },
  ],
  // हार (haar - defeat/necklace)
  [
    { consonant: "ह", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ह", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "ह", matra: "ा" },
  ],
  // शांति (shanti - peace)
  [
    { consonant: "श", matra: "ां" },
    { consonant: "त", matra: "ि" },
    { consonant: "श", matra: "ां" },
    { consonant: "त", matra: "ि" },
    { consonant: "श", matra: "ां" },
  ],
  // प्यार (pyar - love)
  [
    { consonant: "प", matra: "्" },
    { consonant: "य", matra: "ा" },
    { consonant: "र", matra: "" },
    { consonant: "प", matra: "्" },
    { consonant: "य", matra: "ा" },
  ],
  // खुशी (khushi - happiness)
  [
    { consonant: "ख", matra: "ु" },
    { consonant: "श", matra: "ी" },
    { consonant: "ख", matra: "ु" },
    { consonant: "श", matra: "ी" },
    { consonant: "ख", matra: "ु" },
  ],
  // दुख (dukh - sorrow)
  [
    { consonant: "द", matra: "ु" },
    { consonant: "ख", matra: "" },
    { consonant: "द", matra: "ु" },
    { consonant: "ख", matra: "" },
    { consonant: "द", matra: "ु" },
  ],
  // गाँव (gaanv - village)
  [
    { consonant: "ग", matra: "ाँ" },
    { consonant: "व", matra: "" },
    { consonant: "ग", matra: "ाँ" },
    { consonant: "व", matra: "" },
    { consonant: "ग", matra: "ाँ" },
  ],
  // शहर (shahar - city)
  [
    { consonant: "श", matra: "" },
    { consonant: "ह", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "श", matra: "" },
    { consonant: "ह", matra: "" },
  ],
  // देश (desh - country)
  [
    { consonant: "द", matra: "े" },
    { consonant: "श", matra: "" },
    { consonant: "द", matra: "े" },
    { consonant: "श", matra: "" },
    { consonant: "द", matra: "े" },
  ],
  // राजा (raja - king)
  [
    { consonant: "र", matra: "ा" },
    { consonant: "ज", matra: "ा" },
    { consonant: "र", matra: "ा" },
    { consonant: "ज", matra: "ा" },
    { consonant: "र", matra: "ा" },
  ],
  // रानी (rani - queen)
  [
    { consonant: "र", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "र", matra: "ा" },
    { consonant: "न", matra: "ी" },
    { consonant: "र", matra: "ा" },
  ],
  // बच्चा (bachcha - child)
  [
    { consonant: "ब", matra: "" },
    { consonant: "च", matra: "्" },
    { consonant: "च", matra: "ा" },
    { consonant: "ब", matra: "" },
    { consonant: "च", matra: "्" },
  ],
  // माँ (maan - mother)
  [
    { consonant: "म", matra: "ाँ" },
    { consonant: "म", matra: "" },
    { consonant: "म", matra: "ाँ" },
    { consonant: "म", matra: "" },
    { consonant: "म", matra: "ाँ" },
  ],
  // पिता (pita - father)
  [
    { consonant: "प", matra: "ि" },
    { consonant: "त", matra: "ा" },
    { consonant: "प", matra: "ि" },
    { consonant: "त", matra: "ा" },
    { consonant: "प", matra: "ि" },
  ],
  // भाई (bhai - brother)
  [
    { consonant: "भ", matra: "ा" },
    { consonant: "ई", matra: "" },
    { consonant: "भ", matra: "ा" },
    { consonant: "ई", matra: "" },
    { consonant: "भ", matra: "ा" },
  ],
  // बहन (bahan - sister)
  [
    { consonant: "ब", matra: "" },
    { consonant: "ह", matra: "" },
    { consonant: "न", matra: "" },
    { consonant: "ब", matra: "" },
    { consonant: "ह", matra: "" },
  ],
  // दादा (dada - grandfather)
  [
    { consonant: "द", matra: "ा" },
    { consonant: "द", matra: "ा" },
    { consonant: "द", matra: "ा" },
    { consonant: "द", matra: "ा" },
    { consonant: "द", matra: "ा" },
  ],
  // नाना (nana - maternal grandfather)
  [
    { consonant: "न", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "न", matra: "ा" },
    { consonant: "न", matra: "ा" },
  ],
  // मंदिर (mandir - temple)
  [
    { consonant: "म", matra: "ं" },
    { consonant: "द", matra: "ि" },
    { consonant: "र", matra: "" },
    { consonant: "म", matra: "ं" },
    { consonant: "द", matra: "ि" },
  ],
  // रेल (rail - train)
  [
    { consonant: "र", matra: "े" },
    { consonant: "ल", matra: "" },
    { consonant: "र", matra: "े" },
    { consonant: "ल", matra: "" },
    { consonant: "र", matra: "े" },
  ],
  // सड़क (sarak - road)
  [
    { consonant: "स", matra: "" },
    { consonant: "ड", matra: "़" },
    { consonant: "क", matra: "" },
    { consonant: "स", matra: "" },
    { consonant: "ड", matra: "़" },
  ],
  // हवाई (hawai - aerial)
  [
    { consonant: "ह", matra: "" },
    { consonant: "व", matra: "ा" },
    { consonant: "ई", matra: "" },
    { consonant: "ह", matra: "" },
    { consonant: "व", matra: "ा" },
  ],
  // नौकर (naukar - servant)
  [
    { consonant: "न", matra: "ौ" },
    { consonant: "क", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "न", matra: "ौ" },
    { consonant: "क", matra: "" },
  ],
  // दुकान (dukan - shop)
  [
    { consonant: "द", matra: "ु" },
    { consonant: "क", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "द", matra: "ु" },
    { consonant: "क", matra: "ा" },
  ],
  // सच (sach - truth)
  [
    { consonant: "स", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "स", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "स", matra: "" },
  ],
  // बात (baat - talk)
  [
    { consonant: "ब", matra: "ा" },
    { consonant: "त", matra: "" },
    { consonant: "ब", matra: "ा" },
    { consonant: "त", matra: "" },
    { consonant: "ब", matra: "ा" },
  ],
  // काम (kaam - work)
  [
    { consonant: "क", matra: "ा" },
    { consonant: "म", matra: "" },
    { consonant: "क", matra: "ा" },
    { consonant: "म", matra: "" },
    { consonant: "क", matra: "ा" },
  ],
  // समय (samay - time)
  [
    { consonant: "स", matra: "" },
    { consonant: "म", matra: "" },
    { consonant: "य", matra: "" },
    { consonant: "स", matra: "" },
    { consonant: "म", matra: "" },
  ],
  // जमीन (jamin - land/earth)
  [
    { consonant: "ज", matra: "" },
    { consonant: "म", matra: "ी" },
    { consonant: "न", matra: "" },
    { consonant: "ज", matra: "" },
    { consonant: "म", matra: "ी" },
  ],
  // चरण (charan - feet)
  [
    { consonant: "च", matra: "" },
    { consonant: "र", matra: "" },
    { consonant: "ण", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "र", matra: "" },
  ],
  // वचन (vachan - promise)
  [
    { consonant: "व", matra: "" },
    { consonant: "च", matra: "" },
    { consonant: "न", matra: "" },
    { consonant: "व", matra: "" },
    { consonant: "च", matra: "" },
  ],
  // धन (dhan - wealth)
  [
    { consonant: "ध", matra: "" },
    { consonant: "न", matra: "" },
    { consonant: "ध", matra: "" },
    { consonant: "न", matra: "" },
    { consonant: "ध", matra: "" },
  ],
  // शक्ति (shakti - power)
  [
    { consonant: "श", matra: "" },
    { consonant: "क", matra: "्" },
    { consonant: "त", matra: "ि" },
    { consonant: "श", matra: "" },
    { consonant: "क", matra: "्" },
  ],
  // ज्ञान (gyaan - knowledge)
  [
    { consonant: "ज", matra: "्" },
    { consonant: "ञ", matra: "ा" },
    { consonant: "न", matra: "" },
    { consonant: "ज", matra: "्" },
    { consonant: "ञ", matra: "ा" },
  ],
  // बुद्धि (buddhi - intelligence)
  [
    { consonant: "ब", matra: "ु" },
    { consonant: "द", matra: "्" },
    { consonant: "ध", matra: "ि" },
    { consonant: "ब", matra: "ु" },
    { consonant: "द", matra: "्" },
  ],
  // वर्षा (varsha - rain)
  [
    { consonant: "व", matra: "" },
    { consonant: "र", matra: "्" },
    { consonant: "ष", matra: "ा" },
    { consonant: "व", matra: "" },
    { consonant: "र", matra: "्" },
  ],
];

// Get daily word based on date
export function getDailyWord(): Word {
  const start = new Date(2024, 0, 1);
  const today = new Date();
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return WORDS[diff % WORDS.length];
}

// Get random word for practice mode
export function getRandomWord(): Word {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
