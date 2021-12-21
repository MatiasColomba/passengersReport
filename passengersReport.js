let numberOfStations = 10
let passengers = 0
let finalReport = [""]

function passengersReport(){
    for(let i = 0;i<=numberOfStations; i++){
            if(i>=5){
                passengers = 200 + 20*i + 20
            }else{
                passengers = 200 + 20*i
            }
            finalReport.push("En la estación " + i + " hay " + passengers + " pasajeros arriba del tren")
    }
    return finalReport
}
console.log(passengersReport())