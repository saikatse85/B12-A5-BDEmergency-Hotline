 const loveCount = document.getElementById("love-count");
 const loveBtn = document.getElementsByClassName("love-btn");   
 let count = 0;
    for (let btn of loveBtn) {
        btn.addEventListener("click", function () {
            count++;
            loveCount.innerText = count;
        });
    }

//call Button clicked
const totalCoin =document.getElementById("available-coin")
const nationalTitle = document.getElementById("national-title")
const nationalNumber = document.getElementById("national-number")
const historyContainer = document.getElementById("callHistory-container");
const clickCallData =[];
document.getElementById("national-call-btn")
.addEventListener("click",function(event){
    let availableCoin=parseInt(totalCoin.innerText);
    if(availableCoin >= 20){
        totalCoin.innerText=availableCoin-20;
        alert(`BD Emergency Service calling 
            ${nationalTitle.innerText}\:${nationalNumber.innerText}
            `)
        const data={
            name:"National Emergency No",
            number:document.getElementById("national-number").innerText,
            dateAndTime:new Date().toLocaleTimeString()
        }
        clickCallData.push(data)
        const historyItem = document.createElement("div");
        historyItem.className = "bg-[#FAFAFA] p-2 shadow-[0px_2px_3px_0px_#00000026] rounded-md flex justify-between mt-2 md:mt-1";
        historyItem.innerHTML = `
            <div>
                <h2 class="text[#f2f2f2] font-semibold text-center">${data.name}</h2>
                <p>${data.number}</p>
            </div>
            <p class="flex text-center items-center">${data.dateAndTime}</p>
        `;
        historyContainer.appendChild(historyItem);
    }
    else{
        alert("you have not enough balance")
    }
});

document.getElementById("clear-history")
.addEventListener("click", function(event){
    historyContainer.innerHTML=" ";
})