$(document).ready(function(){
  //Set the UL height to 70% of the window
  $('ul').height(window.innerHeight*0.65)

  var spiner = false;
  var rand = function (r){return Math.floor(Math.random()*r);}

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var excuses = ["Misquoted Rick and Morty and am on a time out",
                 "My goldfish almost drowned",
                 "Can't find my pants",
                 "I have Swine Flue",
                 "I'm allergic",
                 "Keep getting nose bleeds when I move things with my mind",
                 "Found out I may be in a simulation. Need some \'me time\'",
                 "My foot is asleep and don't want to wake it up",
                 "Accidentally liked ex\'s year-old Insta pic. Moving countries",
                 "Ate too much garlic, am in quarantine"];

  // Shuffle the excuses
  exshuffle = shuffle(excuses);

  function spin(){


    // Fill the ul with excuses 4 times to give it substance for scrolling
    for (var y = 0; y < 4; y++) {
      for (var i = 0; i < exshuffle.length; i++) {
        $(".excuses ul").append("<li>"+exshuffle[i]+"</li>");
      }
    }
  }

  $(".spin button").on("click",function(){
    if (spiner){
      $("ul").empty();
      exshuffle = shuffle(excuses);
      spin();
      // Scrolling (-400px so it wont show the bottom)
      $( "ul li" ).animate({'bottom':rand($(".excuses ul li:last-child").position().top-400)},4000);
    }
    else {
      // Scrolling (-400px so it wont show the bottom)
      $( "ul li" ).animate({'bottom':rand($(".excuses ul li:last-child").position().top-400)},4000);
      spiner = true;
    }
  })

  spin();

  //rand($(".excuses ul li:last-child").position().top-100);  //Get Last Li Position
});
