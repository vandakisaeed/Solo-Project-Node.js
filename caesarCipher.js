// caesarCipher.js

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: node caesarCipher.js "your phrase" shift');
}

const phrase = args[0].toLowerCase(); // converts it to lowercase
const shift = parseInt(args[1]); // convert string to number

if (isNaN(shift)) { //check if shift is a number
  console.error('Shift must be a number.');
  //process.exit(1);
}

function caesarCipher(str, shiftAmount) {
  return str
    .split('') // Splits the input string into an array of characters.
    .map(char => { //Transforms each character in the array one by one using .map().
      if (char >= 'a' && char <= 'z') { //Checks if the character is a lowercase letter. If not (like a space), it won't be shifted.
        const code = ((char.charCodeAt(0) - 97 + shiftAmount) % 26 + 26) % 26;
            //Calculates the new character code:

            // char.charCodeAt(0): gets the ASCII value of the character.

            // Subtract 97 (ASCII of 'a') to get a 0–25 range.

            // Add the shift.

            // Use modulo 26 to wrap around if needed.

            // +26 ensures negatives wrap properly. Double % 26 is a trick for handling negative mods.
        return String.fromCharCode(code + 97);// Converts the shifted number back to a letter by adding 97 (base ASCII for 'a').


      } else {
        return char;//If the character is not a lowercase letter (e.g., space, comma), return it unchanged.
      }
    })
    .join('');//Joins the transformed characters back into a full string and returns it.


}

function caesarCipher(str, shiftAmount) {
  // Das Alphabet, mit dem wir arbeiten (nur Kleinbuchstaben)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Wir wandeln den Eingabetext in Kleinbuchstaben um, um die Verarbeitung zu vereinfachen
  const lowerStr = str.toLowerCase();

  // Wir normalisieren den Shift, damit negative Werte und Werte > 26 korrekt behandelt werden
  // z. B. -3 wird zu 23 (weil wir rückwärts gehen), 29 wird zu 3
  const normalizedShift = ((shiftAmount % 26) + 26) % 26;

  // Ergebnis-String wird hier Stück für Stück aufgebaut
  let result = '';

  // Wir gehen jeden Buchstaben im Eingabetext durch
  for (let char of lowerStr) {
    // Wenn der aktuelle Buchstabe im Alphabet enthalten ist (a–z)
    if (alphabet.includes(char)) {
      // Hole die Position des Buchstabens im Alphabet (z. B. a = 0, b = 1, …)
      const index = alphabet.indexOf(char);

      // Berechne die neue Position mit dem Shift
      const newIndex = (index + normalizedShift) % 26;

      // Füge den verschobenen Buchstaben zum Ergebnis hinzu
      result += alphabet[newIndex];
    } else {
      // Wenn es kein Buchstabe ist (z. B. Leerzeichen, Satzzeichen), füge ihn unverändert hinzu
      result += char;
    }
  }

  // Gib das verschlüsselte Ergebnis zurück
  return result;
}


const encrypted = caesarCipher(phrase, shift);
console.log(encrypted);
