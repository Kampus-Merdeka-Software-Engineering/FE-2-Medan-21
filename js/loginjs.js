const baseUrl = "https://be-2-medan-21-production.up.railway.app/";

let formLogin = document.getElementById("loginForm");
//const display = document.querySelector("div[name='hasil-query2']")
//display.innerHTML = ""

formLogin.addEventListener("submit", (event) =>{
    console.log("submitted");
    event.preventDefault();
    const emailValue = document.querySelector("#email").value;
    const passwordValue = document.querySelector("#password").value;
    
    if (
        !emailValue ||
        !passwordValue
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            email: emailValue,
            password: passwordValue
        };
        
        fetch(`${baseUrl}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedData)
        })
        .then(response => response.json())
        .then((res) => {
            console.log("test", res)
            alert("login berhasil");
            window.location.href = "./index.html";
        })
        .catch((error) => {
            alert(`Error Massage: ${error.massage}`);
        })
});