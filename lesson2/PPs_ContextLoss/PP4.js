// Consider the following code:

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// Will this code produce the following output? Why or why not?

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

/*
No, it will not. The code will output:
undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim

Line 7 passes a callback function to forEach as an argument.
The function is being stripped of its surrounding context by being passed to the
method. "This" now references the global object instead of TESgames.
As the global object doesn't contain the "seriesTitle" property,
it will logg undefined.

*/
