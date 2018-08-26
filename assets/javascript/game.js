var ruby = 0;
var amber = 0;
var saphire = 0;
var emerald = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;

function numGenerator() {
    ruby = Math.floor((Math.random() * 10) + 2);
    amber = Math.floor((Math.random() * 10) + 2);
    saphire = Math.floor((Math.random() * 10) + 2);
    emerald = Math.floor((Math.random() * 10) + 2);
    targetScore = Math.floor(((Math.random() * 50) + 13));
    currentScore = 0;

    //$("#footer-content").text("");
    $(".target-score").text(targetScore);
    $(".current-score").text(currentScore);
}

function addGems(value) {
    //take currentScore add gem value
    currentScore += value;
}

function crystalCollector(){
    if (currentScore > targetScore){
        losses++; 
        //$("#footer-content").text("YOU LOSE!");
        $(".losses").text(losses);
        numGenerator();
    }
    else if (currentScore === targetScore){
        wins++;
        //$("#footer-content").text("YOU WIN!");
        $(".wins").text(wins);
        numGenerator();
    }
}


numGenerator();

$(document).ready(function () {

/*     $(document).on("click", function(){
        if (currentScore > targetScore){
            losses++; 
            $("#footer-content").text("YOU LOSE!");
            $(".losses").text(losses);
            numGenerator();
        }
        else if (currentScore === targetScore){
            wins++;
            $("#footer-content").text("YOU WIN!");
            $(".wins").text(wins);
            numGenerator();
        }
    }); */




    $(".target-score").text(targetScore);

    $("#btn-ruby").on("click", function () {
        addGems(ruby);
        $(".current-score").text(currentScore);
        crystalCollector();


        console.log("the value of this gem is " + ruby);
        console.log("new current score " + currentScore);
        console.log("---------");
        
    });
    $("#btn-amber").on("click", function () {
        addGems(amber);
        $(".current-score").text(currentScore);
        crystalCollector();


        console.log("the value of this gem is " + amber);
        console.log("new current score " + currentScore);
        console.log("---------");
    });
    $("#btn-saphire").on("click", function () {
        addGems(saphire);
        $(".current-score").text(currentScore);
        crystalCollector();


        console.log("the value of this gem is " + saphire);
        console.log("new current score " + currentScore);
        console.log("---------");
    });
    $("#btn-emerald").on("click", function () {
        addGems(emerald);
        $(".current-score").text(currentScore);
        crystalCollector();


        console.log("the value of this gem is " + emerald);
        console.log("new current score" + currentScore);
        console.log("---------");
    });

})



console.log("Target score: " + targetScore);
console.log("---------");

/* console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4); */

