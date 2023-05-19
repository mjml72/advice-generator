const btnIcon = document.getElementById("btn-icon");
const advice = document.getElementById("advice");
const idNumber = document.getElementById("id-number");

btnIcon.addEventListener("click", getData);

getData();

async function getData() {

    try{

        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        idNumber.innerHTML = data.slip.id;
        advice.innerHTML = `"${data.slip.advice}"`;      

    }catch(error){

        console.error(error);

    }
}