/**
 * Remove Thai non-base characters at the beginning of text.
 *
 * All of this code is based on PyThaiNLP project in Python. so all credits go to them.
 *
 * This is a common "typo", especially for input field in a form,
 * as these non-base characters can be visually hidden from user
 * who may accidentally type them in.
 *
 * A character to be removed should be both:
 *   - tone mark, above vowel, below vowel, or non-base sign AND
 *   - located at the beginning of the text
 * and also remove zero width characters at the end of text.
 *
 * @param {string} text - input text
 * @returns {string} text without dangling Thai characters at the beginning
 */
function removeThaiDangling(text: string): string {
  const thaiAboveVowels = "\u0e31\u0e34\u0e35\u0e36\u0e37\u0e4d\u0e47";
  const thaiBelowVowels = "\u0e38\u0e39";
  const thaiTonemarks = "\u0e48\u0e49\u0e4a\u0e4b";
  const zeroWidthChars = "\u200b\u200c\u200d";

  const danglingChars = `${thaiAboveVowels}${thaiBelowVowels}${thaiTonemarks}\u0e3a\u0e4c\u0e4d\u0e4e${zeroWidthChars}`;
  return text
    .replace(new RegExp(`^[${danglingChars}]+`), "") // remove dangling characters at the beginning
    .replace(new RegExp(`[${zeroWidthChars}]+$`), ""); // remove zero width characters at the end
}

export default removeThaiDangling;
