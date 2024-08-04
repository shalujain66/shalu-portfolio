const fname = document.getElementById('name');
const fromemail = document.getElementById('email');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');
const successDiv = document.getElementById("successdiv");
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("agya")
    let ebody = `
    <h1>Query from : </h1>${fname.value}
    <br>
    <h1>email id is: </h1>${fromemail.value}
    <br>
    <h1>message is: </h1>${msg.value}
    `;

    Email.send({
        SecureToken :"1c9116e5-f149-4a1d-adfd-49e1dda2d9a9",
        To : 'ashalujain66@gmail.com',
        From : 'ashalujain66@gmail.com',
        Subject : "Query",
        Body : ebody
    }).then(
        successDiv.style.display = "block",
        document.getElementById('submit').reset()
    );
});




