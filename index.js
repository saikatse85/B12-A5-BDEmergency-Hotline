 const loveCount = document.getElementById("love-count");
 const loveBtn = document.getElementsByClassName("love-btn");   
 let count = 0;
    for (let btn of loveBtn) {
        btn.addEventListener("click", function () {
            count++;
            loveCount.innerText = count;
        });
    }

// common function for all call button
const totalCoin = document.getElementById("available-coin");
const historyContainer = document.getElementById("callHistory-container");
const clickCallData = [];

function callBtnClicked(buttonId, titleId, numberId, serviceName) {
    document.getElementById(buttonId)
    .addEventListener("click", function () {
        let availableCoin = parseInt(totalCoin.innerText);

        if (availableCoin >= 20) {
            totalCoin.innerText = availableCoin - 20;

            const title = document.getElementById(titleId).innerText;
            const number = document.getElementById(numberId).innerText;

            alert(`
Calling- ${title} : ${number}
            `);

            const data = {
                name: serviceName,
                number: number,
                dateAndTime: new Date().toLocaleTimeString(),
            };

            clickCallData.push(data);

            const historyItem = document.createElement("div");
            historyItem.className =
                "bg-[#FAFAFA] p-2 shadow-[0px_2px_3px_0px_#00000026] rounded-md flex justify-between mt-2 md:mt-1";

            historyItem.innerHTML = `
                <div>
                    <h2 class="text-[#111111] font-semibold text-center">${data.name}</h2>
                    <p>${data.number}</p>
                </div>
                <p class="flex text-center items-center">${data.dateAndTime}</p>
            `;

            historyContainer.appendChild(historyItem);
        } else {
            alert("0, You have not enough balance");
        }
    });
}
callBtnClicked("national-call-btn", "national-title", "national-number", "National Emergency No");
callBtnClicked("police-call-btn", "police-title", "police-number", "Police Helpline No");
callBtnClicked("fire-call-btn","fire-title","fire-number","Fire Service No");
callBtnClicked("ambulance-call-btn", "ambulance-title", "ambulance-number", "Ambulance Service No");
callBtnClicked("women-child-call-btn","women-child-title","women-child-number","Women & Child Helpline");
callBtnClicked("anti-corruption-call-btn","anti-title","anti-number","Anti-Corruption Helpline");
callBtnClicked("electricity-call-btn","electricity-title","electricity-number","Electricity Helpline");
callBtnClicked("brac-call-btn","brac-title","brac-number","Brac Helpline");
callBtnClicked("railway-call-btn","railway-title","railway-number","Bangladesh Railway Helpline")

//Clear Button section
document.getElementById("clear-history")
.addEventListener("click", function(event){
    historyContainer.innerHTML=" ";
})