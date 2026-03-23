(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("1");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  console.log("2");

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < names.length; i++) {
    var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
    var isVowel = false;

    for (var j = 0; j < vowels.length; j++) {
      if (lastLetter === vowels[j]) {
        isVowel = true;
        break;
      }
    }

    if (isVowel) {
      console.log("✨ Special greeting for " + names[i] + "! (ends with vowel '" + lastLetter + "')");
    } else {
      console.log("👋 Standard greeting for " + names[i]);
    }
  }
})();
