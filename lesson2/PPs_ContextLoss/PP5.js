// Use let self = this; to ensure that TESgames.listGames uses
// TESGames as its context and logs the proper output.

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;  // initializing self with this

    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);  // changing this to self
    });
  }
};

TESgames.listGames();