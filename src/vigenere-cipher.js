const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    key = key.repeat(Math.ceil(message.length / key.length));

    let codeA = "A".charCodeAt(0);
    let alphabetLength = 26;
    let alphabet = "";
    for (let i = 0; i < alphabetLength; i++) {
      let letter = codeA + i;
      alphabet += String.fromCharCode(letter);
    }

    let result = "";

    let x = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result += message[i];
        x--;
      } else {
        let letterIndex = message.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(x) - codeA;

        result += String.fromCharCode(
          codeA + ((letterIndex + shift) % alphabetLength)
        );
      }
      x++;
    }

    if (this.type === true || this.type === undefined) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  decrypt(encruptedMessage, key) {
    if (encruptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encruptedMessage = encruptedMessage.toUpperCase();
    key = key.toUpperCase();

    key = key.repeat(Math.ceil(encruptedMessage.length / key.length));

    let codeA = "A".charCodeAt(0);
    let alphabetLength = 26;
    let alphabet = "";
    for (let i = 0; i < alphabetLength; i++) {
      let letter = codeA + i;
      alphabet += String.fromCharCode(letter);
    }

    let result = "";

    let x = 0;
    for (let i = 0; i < encruptedMessage.length; i++) {
      if (!alphabet.includes(encruptedMessage[i])) {
        result += encruptedMessage[i];
        x--;
      } else {
        let letterIndex = encruptedMessage.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(x) - codeA;

        result += String.fromCharCode(
          codeA + ((letterIndex - shift + alphabetLength) % alphabetLength)
        );
      }
      x++;
    }

    if (this.type === true || this.type === undefined) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
