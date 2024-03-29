// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe

red = document.getElementsByClassName("redPurple");
console.log(red);

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
redo = document.getElementsByClassName("redPurple");
console.log(redo);

// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

onlyH1 = document.querySelectorAll("h1.redPurple");
    console.log(onlyH1);


// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
allElm = document.querySelectorAll("p,li,span");
console.log(allElm);
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
allImpP = document.querySelectorAll("p, li.important");
console.log(allImpP);
// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

h1andSpan = document.querySelectorAll("h1.redPurple, span.redPurple");
console.log(h1andSpan);

