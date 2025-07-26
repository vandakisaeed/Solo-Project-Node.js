
// pigLatin.js

// Nimmt alle Befehlszeilenargumente ab dem dritten Element (index 2)
// z.B. node pigLatin.js "Hello world" → args = ['Hello', 'world']
const args = process.argv.slice(2);

// Wenn keine Eingabe vorhanden ist, zeige einen Fehler und beende das Programm
if (args.length === 0) {
  console.error('❌ Bitte gib einen Satz zum Übersetzen ein.');
  process.exit(1);
}

// Verbindet die Wörter wieder zu einem String mit Leerzeichen (falls mehr als ein Wort)
const input = args.join(' ');

// Zerlegt den Eingabesatz in ein Array von Wörtern
const words = input.split(' ');

// Hilfsfunktion: prüft, ob ein Buchstabe ein Vokal ist (a, e, i, o, u)
const isVowel = (char) => 'aeiou'.includes(char.toLowerCase());

// Hauptfunktion: übersetzt ein einzelnes Wort in Pig Latin
function toPigLatin(word) {
  const lowerWord = word.toLowerCase(); // wandelt Wort in Kleinbuchstaben um

  if (isVowel(lowerWord[0])) {
    // Fall 1: Wort beginnt mit Vokal → einfach "way" anhängen
    return lowerWord + 'way';
  } else if (!isVowel(lowerWord[0]) && isVowel(lowerWord[1])) {
    // Fall 2: Wort beginnt mit einem Konsonanten, gefolgt von einem Vokal
    // → ersten Buchstaben ans Ende + "ay"
    return lowerWord.slice(1) + lowerWord[0] + 'ay';
  } else {
    // Fall 3: Wort beginnt mit zwei Konsonanten
    // → die ersten zwei Buchstaben ans Ende + "ay"
    return lowerWord.slice(2) + lowerWord.slice(0, 2) + 'ay';
  }
}

// Wendet die Übersetzungsfunktion auf jedes Wort an und verbindet sie wieder zu einem Satz
const translated = words.map(toPigLatin).join(' ');

// Gibt den übersetzten Satz in der Konsole aus
console.log(translated);
