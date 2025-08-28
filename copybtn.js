// // copy button clicked common function
// const copyCountNumber =document.getElementById("no-copy-count")
// let copyCount =0;
// function copyButtonClicked (buttonId, titleId, numberId, serviceName){
//     document.getElementById(buttonId)
//     .addEventListener("click", function(buttonId){
//         copyCount++;
//         copyCountNumber.innerText=copyCount;

//         const serviceTitle =document.getElementById(titleId).innerText;
//         const serviceNumber =document.getElementById(numberId).innerText;
        
// navigator.clipboard.writeText(serviceNumber)
//                 .then(() => {
//                     alert(`Number Successfully Copied
// ${serviceTitle}: ${serviceNumber}`);
//                 })
//                 .catch(err => console.error("Copy failed:", err));
//         });
// }
// copyButtonClicked("national-copy-btn", "national-title", "national-number", "National Emergency No");
// copyButtonClicked("police-copy-btn", "police-title", "police-number", "Police Helpline No");
// copyButtonClicked("fire-copy-btn", "fire-title", "fire-number", "Fire Service No");
// copyButtonClicked("ambulance-copy-btn", "ambulance-title", "ambulance-number", "Ambulance Service No");
// copyButtonClicked("women-child-copy-btn","women-child-title","women-child-number","Women & Child Helpline");
// copyButtonClicked("anti-corruption-copy-btn","anti-title","anti-number","Anti-Corruption Helpline");
// copyButtonClicked("electricity-copy-btn","electricity-title","electricity-number","Electricity Helpline");
// copyButtonClicked("brac-copy-btn","brac-title","brac-number","Brac Helpline");
// copyButtonClicked("railway-copy-btn","railway-title","railway-number","Bangladesh Railway Helpline");