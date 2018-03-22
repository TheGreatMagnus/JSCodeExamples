// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
//          Bob answers 'Sure.' if you ask him a question.
//          He answers 'Whoa, chill out!' if you yell at him.
//          He answers 'Calm down, I know what I'm doing!’ if you yell a question at him.
//          He answers 'Whatever.' to anything else.

function saySomething(text){
  if ((text.slice(-1) === "?") && (text.toLowerCase() === text)){
    return "Sure.";
  } else if (text.toUpperCase().slice(-2) === (text.slice(-2,-1) + "?")){
    return "Calm down! I know what I'm doing!";
  }else if (text.slice(-2) === (text.toUpperCase().slice(-2, -1) + "!")){
    return "Whoa! Chill out";
  }else {
    return "Whatever."
  }
};

var t = saySomething("Come here.");
console.log(t)
