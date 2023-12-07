const baseUrl = "https://be-palembang-24-production.up.railway.app/";

let formRegister = document.getElementById("formpostr");

//const display = document.querySelector("div[name='hasil-query2']")
//display.innerHTML = ""

formRegister.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nameValue = document.querySelector("#name").value;
    const phoneValue = document.querySelector("#phone").value;
    const emailValue = document.querySelector("#email").value;
    const passwordValue = document.querySelector("#password").value;
    
    if (
        !nameValue ||
        !phoneValue ||
        !emailValue ||
        !passwordValue
        ) {
            alert("Please Fill in all fields correctly before sending ");
            return;
        }
        
        const submittedData = {
            name: nameValue,
            phone: phoneValue,
            email: emailValue,
            password: passwordValue
        };
        
        fetch(`${baseUrl}formpostr`, {
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