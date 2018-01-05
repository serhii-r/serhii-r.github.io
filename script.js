(function () {
  var c = [];
  var counter = 0;
  setUp (); // setting up random images grid and an event listener
  function init () {
    /*preventing the event being triggered with a multiclick on the same image, click on a blank image
    and delays the opening of the third image */
    if (event.target.style.transform !== "rotateY(180deg)" && c.length !== 2 && event.target.tagName === 'IMG' ) {
      c.push(event.target); //opened images tracker
      rotate();
      if (c.length === 2) { //two images opened
        var img = [c[0], c[1], c[0].previousElementSibling, c[1].previousElementSibling]; //container for a front and back of two images
        if (img[2].src === img[3].src) { // the same images opened
          setTimeout(deleteImg, 1000, img);
          setTimeout(winCheck, 2000); //end of the game checker
        } else {
          setTimeout(deRotate, 1000, img); //closing two different images
        };
      };
    };
  };
  function setUp () {
    document.getElementById('wraper').addEventListener ('click', init);
    var imgContainer = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg",
                        "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
    imgContainer.sort(function() { return 0.5 - Math.random() });
    for (var i = 0; i < 12; i++) {
    document.getElementById("front" + i).src = imgContainer[i];
    };
  };
  function rotate () {
    c[c.length - 1].style.transform = "rotateY(180deg)";
    c[c.length - 1].previousElementSibling.style.transform = "rotateY(180deg)";
    };
  function deRotate (card) { // closing two different opened images
      for (var i = 0; i < 4; i++) {
      card[i].style.transform = "rotateY(0deg)";
    };
    setTimeout (emptyArray, 600); //delays the opening of the third image
  };
   function deleteImg (card) {
     for (var i = 0; i < 4; i++) {
     card[i].style.transform = "rotateY(90deg)";
   };
   setTimeout (emptyArray, 600); //delays the opening of the third image
   counter++; //used to detect the end of the game
  };
  function emptyArray () {
    c = [];
  };
  function winCheck () {
  if (counter === 5) {
    document.querySelector("h1").innerHTML = "Finish him!!!"
  };
   if (counter === 6) {
    document.querySelector("h1").innerHTML = "Flawless victory!"
  };
  };
})();
