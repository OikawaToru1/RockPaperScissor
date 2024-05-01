let compChoice;
    function computer()
{
    let compValue =  (Math.ceil(Math.random()*3))
    if(compValue==1)
    {
        compChoice = "Rock"
        return compChoice;
    }
    else if (compValue== 2)
    {
        compChoice = "Paper";
        return compChoice;
    }
    else{
        compChoice = "Scissors";
        return compChoice;
    }
}
    let text = document.getElementById("1");
    let secText = document.getElementById("2");
    let resultText = document.getElementById("result");

    let ans;
    const btn = document.querySelectorAll("button");
        btn.forEach(answer => answer.addEventListener("click",(e)=>{
            ans = e.target.id;
            ans = document.getElementById(ans).value;
            text.innerHTML=`User selected :${ans}`;
            computer();
            secText.innerHTML= `Computerselected : ${compChoice}`;
            compare()

        }))
        let userScore = document.getElementById("human");
        let userCount = 0
        let computerScore = document.getElementById("computer");
        let computerCount = 0
        function compare(){
            if(ans.toLowerCase() == compChoice.toLowerCase()){
                resultText.innerHTML="It's a draw"
            }
            else if((ans.toLowerCase() == "rock" && compChoice.toLowerCase() == "scissors") ||(ans.toLowerCase() == "paper" && compChoice.toLowerCase() == "rock") || (ans.toLowerCase() == "scissors" && compChoice.toLowerCase() == "paper")){
                resultText.innerHTML="User Wins"
                userCount++
                userScore.innerHTML = `UserScore : ${userCount}`
            }
            else{
                resultText.innerHTML="Computer Wins"
                computerCount++
                computerScore.innerHTML = `ComputerScore : ${computerCount}`
            }
        }

