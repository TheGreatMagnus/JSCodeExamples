function jadenCase(text) {
    var newText = text.split(" ")
    .map(function(x){
      return x[0].toUpperCase() + x.slice(1);
    })
    .join(" ");
    console.log(newText);
};

jadenCase("How can mirrors be real if our eyes aren't real?")
