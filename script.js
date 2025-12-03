function inleveren(){
    let naam = document.getElementById("naam").value;
    let leeftijd = document.getElementById("leeftijd").value;
    let symptoom1 = document.getElementById("symptoom1").value;
    let symptoom2 = document.getElementById("symptoom2").value;
    let symptoom3 = document.getElementById("symptoom3").value;
    let symptoom4 = document.getElementById("symptoom4").value;
    let symptoom5 = document.getElementById("symptoom5").value;

    symptoom1 = symptoom1.toUpperCase();
    symptoom2 = symptoom2.toUpperCase();
    symptoom3 = symptoom3.toUpperCase();
    symptoom4 = symptoom4.toUpperCase();
    symptoom5 = symptoom5.toUpperCase();

    if (naam == "" && leeftijd == ""){
        window.alert("U moet uw naam en leeftijd nog invullen.");
    }
    
    else if (naam == ""){
        window.alert("U moet uw naam nog invullen.");
    }

    else if (leeftijd == ""){
        window.alert("Uw moet uw leeftijd nog invullen.");
    }

    else {
        let count = 0;
        if (leeftijd < 18){
    
            if (symptoom1 != ""){
                count = count + 1;
            }
    
            if (symptoom2 != ""){
                count = count + 1;
            }
    
            if (symptoom3 != ""){
                count = count + 1;
            }
    
            if (count >= 3){
                window.alert("Uw symptomen zijn: \n" + symptoom1 + "\n" + symptoom2 + "\n" + symptoom3 + "\n" + symptoom4 + "\n" + symptoom5);
            }

            if (count < 3){
                window.alert("U moet nog minimaal 3 symptomen invullen.");
            }
        }

        if (leeftijd > 18){
            if (symptoom1 != ""){
                count = count + 1;
            }

            if (symptoom2 != ""){
                count = count + 1;
            }

            if (symptoom3 != ""){
                count = count + 1;
            }

            if (symptoom4 != ""){
                count = count + 1;
            }

            if (symptoom5 != ""){
                count = count + 1;
            }

            if (count >= 2){
                window.alert("Uw symptomen zijn: \n" + symptoom1 + "\n" + symptoom2 + "\n" + symptoom3 + "\n" + symptoom4 + "\n" + symptoom5);
            }

            if (count < 2){
                window.alert("U moet nog minimaal 2 symptomen invullen.");
            }
        }
    }
}