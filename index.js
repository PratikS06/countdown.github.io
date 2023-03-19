const endDate = "01 August 2024 12:00 AM";

document.getElementById("end-date").innerText= endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()

    console.log(end);
    console.log(now)
    const diff = (end - now) /1000
    console.log(diff);
    if (diff<0) {
        return 0;
    }
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%24;
    inputs[3].value = Math.floor(diff)%60

}



setInterval(
    ()=>{
        clock()
    },1000
)