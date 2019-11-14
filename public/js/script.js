let games;

$(document).ready(() => {
  $.get("gameList.json", (data) => {
    games = data;
    // console.log(data[0].name);
    loadGames("");
  });
  $("#searchBox").keyup((e) => {
    // console.log($("input").val());
    // console.log(e.which);
    // if (e.which == 13) {
      // console.log("here");
      
    // }
    // console.log($("input").val())
    loadGames($("input").val());
  });
});

function loadGames(searchValue) {
  // (searchValue === "") ? $(".gameList").clear : true;
  let found = false;
  $(".gameList").empty();
  for(let i = 0; i < games.length; i++) {
    if(((games[i].name).toLowerCase()).includes((searchValue.trim().toLowerCase())) || searchValue === "") {
      found = true;
      // console.log(game.name);
      $(".gameList").append(`
        <div class="gameItem">
          <a href="${games[i].link}">
            <div class="title">${games[i].name}</div>
            <img src="${games[i].image}" title="${games[i].name}" alt="${games[i].name}">
          </a>
        </div>
      `);
    }
    else if (!found && i === games.length-1){
      $(".gameList").append(`
        <div class="gameItem">
          <h3 class="title">No Results</h3>
          <img src="../images/noResults.jpg" title="No Results" alt="No Results">
        </div>
      `);
      break;
    }
  }
}