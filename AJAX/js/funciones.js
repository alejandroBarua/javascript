export default function lastDate(lastDate) {
 
    let dateNow = Date.now(),
        resultado = dateNow - toMilliseconds(lastDate),
        days = Math.floor(resultado / (1000*60*60*24));

    if(days == 0) return "hoy";

    if(days == 1) return "hace un dia"
    if(days < 7) return numberToWord(days) + " dias";

    let weeks = Math.floor(days / 7);
    if(weeks == 1) return "hace una semana";
    if(weeks < 4)  return numberToWord(weeks) + " semanas";
    
    let months = Math.floor(weeks / 4);
    if(months == 1) return "hace un mes";
    if(months <= 12) return numberToWord(months) + " meses";

    let years = Math.floor(months / 12);
    if(years == 1) return "hace un año";
    return numberToWord(years) + " años";
}


function numberToWord(number) {
    
    let word = "hace ";

    switch(number){

        case 2:
            word += "dos";
            break;
        case 3:
            word += "tres";
            break;
        case 4:
            word += "cuatro";
            break;
        case 5:
            word += "cinco";
            break;
        case 6:
            word += "seis";
            break;
        case 7:
            word += "siete";
            break;
        case 8:
            word += "ocho";
            break;
        case 9:
            word += "nueve";
            break;
        case 10:
            word += "diez";
            break;
        case 11:
            word += "once";
            break;
        case 12:
            word += "doce";
            break;
    }

    return word;
}

function toMilliseconds(updatedAt) {

    let lastDate = updatedAt.slice(0, 10).split("-");
    const year = lastDate[0],
        month = lastDate[1]-1,
        day = lastDate[2]-1;
    
    lastDate = new Date(year, month, day);
    return Date.parse(lastDate);
}



