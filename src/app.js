const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
  document.querySelector(".excuse").innerHTML = generateExcuse();
});

let generateExcuse = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let last = [".com"];

  let outcomes = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++)
        for (let o = 0; o < last.length; o++) {
          outcomes.push(pronoun[i] + adj[j] + noun[k] + last[o] + "<br>");
        }
    }
  }
  return outcomes;
};
