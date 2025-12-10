function checkStagePlacement(){
    const S = Number(document.getElementById("S").value);
    const R = Number(document.getElementById("R").value);
    const K = Number(document.getElementById("K").value);

    const result = document.getElementById("result");

    const side = Math.sqrt(S);

    const canPlace = (2 * R + 2 * K) <= side;

    if (canPlace) {
        result.innerText = "Сцена помещается в зал!";
        result.style.color = "green";
        alert("Сцена помещается в зал!");
        
        document.getElementById("stageForm").submit();
        
    } else {
        result.innerText = "Сцена не помещается. Измените данные!";
        result.style.color = "red";
        alert("Сцена не помещается. Измените данные!");
    }
}


document.getElementById("checkBtn").addEventListener("click", checkStagePlacement);

