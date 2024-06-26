Game.registerMod("Rotten Cookies", {
  init: function () {
    img =
      "https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.png";
    if (Game.ready) {
      this.createAchievements();
      Game.Notify(
        "Successfully Installed Mod!",
        "<b>Rotten Cookies</b><q>they're suprisingly good</q>",
        [0, 0, img]
      );
    } else Game.registerHook("create", this.createAchievements);
    Game.registerHook("check", this.checkAchievements);
  },
  createAchievements: function () {
    this.achievements = [];
    this.achievements.push(
      new Game.Achievement(
        "Wake up and bake",
        "Play <b>Cookie Clicker</b> before <b>7am</b>.",
        [1, 0, img],
        (order = 0)
      ),
      new Game.Achievement(
        "The mod maker",
        "Change your bakery's name to <b>NCSources</b>",
        [0, 0, img]
      ),
      (Game.last.pool = "shadow")
    );
    LocalizeUpgradesAndAchievs();
  },
  checkAchievements: function () {
    Game.Win("Third-party");
    if (new Date().getHours() < 7) Game.Win("Wake up and bake");
    if (Game.bakeryName == "ncsources") Game.Win("The mod maker");
  },
  save: function () {
    let str = "";
    for (let i of this.achievements) str += i.won;
    return str;
  },
  load: function (str) {
    for (let i in this.achievements) this.achievements[i].won = Number(str[i]);
  },
});
