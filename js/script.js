$(document).ready(() => {
    // $("body").css("background-color", "black");
    let games;
    $.get("games.json", (data) => {
        games = data;
        // console.log(data[0].name);
    });
    $("input").keyup((e) => {
        // console.log($("input").val());
        games.forEach((game) => {
            if ($("input").val() === game.name) {
                // console.log(game.name);
                $("body").append(`<div class="w3-row-padding w3-margin-top">
                    <div class="w3-third">${game.name}</div>
                    <div class="w3-third">test2</div>
                    <div class="w3-third">test3</div>
                </div>`);

            }
        });
    });
});