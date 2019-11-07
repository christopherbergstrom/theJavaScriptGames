$(document).ready(() => {
  $("body").css("background-color", "black");
  console.log("loaded");
  let games;
  $.get("gameList.json", (data) => {
    games = data;
    // console.log(data[0].name);
  });
  $("#searchBox").keyup((e) => {
    // console.log($("input").val());
    console.log(e.which);
    if (e.which == 13) {
      console.log("here");
      games.forEach((game) => {
        if ($("input").val() === game.name) {
          // console.log(game.name);
          $("header").after(`<div class="grid-x grid-margin-x">
            <div class="cell medium-4 text-center">${game.name}</div>
            <div class="cell medium-4 text-center">test2</div>
            <div class="cell medium-4 text-center">test3</div>
          </div>`);
        }
      });
    }
  });
});