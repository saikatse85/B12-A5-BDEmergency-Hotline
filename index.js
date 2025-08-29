//  Love Count function
 const loveCount = document.getElementById("love-count");
 const loveBtn = document.getElementsByClassName("love-btn");   
 let count = 0;
    for (let btn of loveBtn) {
        btn.addEventListener("click", function () {
            count++;
            loveCount.innerText = count;
            btn.style.color='red'
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

            alert(`📞Calling- 
    ${title} : ${number}
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
            alert("❌, You have not enough Coin");
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

// copy button clicked common function
const copyCountNumber = document.getElementById("no-copy-count");
let copyCount = 0;

function copyButtonClicked(buttonId, titleId, numberId, serviceName) {
    document.getElementById(buttonId)
    .addEventListener("click", function() { 
        copyCount++;
        copyCountNumber.innerText = copyCount;

        const serviceTitle = document.getElementById(titleId).innerText;
        const serviceNumber = document.getElementById(numberId).innerText;
        
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Number Successfully Copied
${serviceTitle}: ${serviceNumber}`);
            })
            .catch(err => console.error("Copy failed:", err));
    });
}

copyButtonClicked("national-copy-btn", "national-title", "national-number", "National Emergency No");
copyButtonClicked("police-copy-btn", "police-title", "police-number", "Police Helpline No");
copyButtonClicked("fire-copy-btn", "fire-title", "fire-number", "Fire Service No");
copyButtonClicked("ambulance-copy-btn", "ambulance-title", "ambulance-number", "Ambulance Service No");
copyButtonClicked("women-child-copy-btn","women-child-title","women-child-number","Women & Child Helpline");
copyButtonClicked("anti-copy-btn","anti-title","anti-number","Anti-Corruption Helpline");
copyButtonClicked("electricity-copy-btn","electricity-title","electricity-number","Electricity Helpline");
copyButtonClicked("brac-copy-btn","brac-title","brac-number","Brac Helpline");
copyButtonClicked("railway-copy-btn","railway-title","railway-number","Bangladesh Railway Helpline");
