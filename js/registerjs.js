const baseUrl = "https://be-2-medan-21-production.up.railway.app/";

let formRegister = document.getElementById("registerForm");
//const display = document.querySelector("div[name='hasil-query2']")
//display.innerHTML = ""

formRegister.addEventListener("submit", (event) =>{
    console.log("submitted");
    event.preventDefault();
    const nameValue = document.querySelector("#name").value;
    const usernameValue = document.querySelector("#username").value;
    const emailValue = document.querySelector("#email").value;
    const passwordValue = document.querySelector("#password").value;
    
    if (
        !nameValue ||
        !usernameValue ||
        !emailValue ||
        !passwordValue
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            name: nameValue,
            username: usernameValue,
            email: emailValue,
            password: passwordValue
        };
        
        fetch(`${baseUrl}register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedData)
        })
        .then(response => response.json())
        .then((res) => {
            console.log("test", res)
            alert("register berhasil");
            window.location.href = "./login.html";
        })
        .catch((error) => {
            alert(`Error Massage: ${error.massage}`);
        })
});