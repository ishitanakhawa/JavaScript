let currentDate = new Date();
console.log(currentDate);

function formatDate(currentDate) {
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; 
    if(month < 10){
        month = "0" + month; //01
    }
    let year = currentDate.getFullYear();

    currentDate = day + "-" + month + "-" + year;

   return currentDate;
}
let formattedDate = formatDate(currentDate);
console.log(formattedDate);
export {formatDate};