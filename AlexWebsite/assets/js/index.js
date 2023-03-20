const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${name.value}
    <br>
    <h1>Last Name: </h1>${msg.value}
    `

    Email.send({
        SecureToken : "9ad42a3c-fe1a-4edf-aa89-cea563a1d9fa",
        To : 'ofuonyeadialexander1997@gmail.com', 
        From : email.value,
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});