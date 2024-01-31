// 3 - Créez une fonction qui génère un nombre entre 0 et 1 dans la console.
function nombreAleatoire() {
    // var nombre = Math.random(); // code manquant : il faut appeler la fonction Math.random()
    const nombre = Math.random();
    console.log(nombre);
  }
  // nombreAleatoire(); //--> appeler la fct
  nombre = nombreAleatoire();
  console.log(nombre);
  
  // 4 - Trouvez comment arrondir ce nombre et affichez le.
  function arrondirNombre(nombre) {
    var arrondi = Math.round(nombre); // code non fonctionnel : il faut passer le nombre en paramètre de la fonction Math.round()
    console.log(arrondi);
  }
  arrondirNombre(nombre); // --> appeler la fct avec une valeur à arrondir
  arrondirNombre(4.1); 

