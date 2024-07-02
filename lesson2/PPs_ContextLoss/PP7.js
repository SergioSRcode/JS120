// Use an arrow function to achieve the same result as in PP6:

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {  // an arrow function uses its surrounding context.
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();