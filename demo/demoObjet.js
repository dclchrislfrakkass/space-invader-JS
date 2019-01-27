
////TEST 1/////
// var personneAlpha = {
//     prenom:"Pierre",
//     nom:"noir",
//     age: 25,
//     taille : {
//         longueur: 25,
//         largeur: 50
//     }};

//     console.log(personneAlpha.prénom);
    ///TEST 2 ////
    
    
    function personne(prenom, nom, age, sexe) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        
        
        this.sePresenter = function() {
            console.log("bonjour je m'appelle " + this.nom + " " + this.prenom);
        }

        alert(this.nom + "est instancié(e)");

        // this.nomDeLaMethode = function() {
            //la function
        // }
        
    }
    
    var Pierre = new personne ("Pierre", "Lenoir", 25, "h");
    var Marie = new personne ("Marie", "Leblanc", 18, "f");
    
    
    console.log(Pierre.nom); //Lenoir
    Marie.sePresenter();


    ////////

    var variable = "coucou";
    const constante = "Nom";
    let variable ///une var dans un bloc recuperable ailleur



/*
    MainBoard.AddElement();


    document.div.style.width = "800px";
    document.div.style.height = "600px";
    div.style.background = "black";


//     ************************************************

//     function personne(prenom, nom, age, sexe) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.sexe = sexe;
        
        
//         this.sePresenter = function() {
//             console.log("bonjour je m'appelle " + this.nom + " " + this.prenom);
//         }

//         alert(this.nom + "est instancié(e)");

         
//     }
//     var Pierre = new personne ("Pierre", "LeNoir", 25, "h"); //Lenoir est instancié
//     var Marie = new personne ("Marie", "Leblanc", 18, "f"); //LeBlanc est instancié


// console.log(Pierre.nom); //Lenoir
// Marie.sePresenter();
//  
// *********************************************************************************
/*

    div.innerHTML =" "
    div.style.width = "800px";
    div.style.height = "600px";
    div.style.background = "black";

    

    
}

