 const loveCount = document.getElementById("love-count");
 const loveBtn = document.getElementsByClassName("love-btn");   
 let count = 0;
    for (let btn of loveBtn) {
        btn.addEventListener("click", function () {
            count++;
            loveCount.innerText = count;
        });
    }
