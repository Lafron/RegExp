const texts = document.querySelectorAll("input[type='text']");
const emails = document.querySelectorAll("input[type='email']");
const tels = document.querySelectorAll("input[type='tel']");
const submits = document.querySelectorAll("input[type='submit']");

texts.forEach(text => {
    text.addEventListener("input", e => {
        console.log(e.target);
        let val = e.target.value;
        const letters = /^[А-Яа-яёЁ]+$/;
        if(!val.match(letters)){
            alert('Неверный формат ввода');
            e.target.value = "";
        }
    });
});

emails.forEach(email => {

});

tels.forEach(input => {
    input.addEventListener("input", e => {
        e.target.value = e.target.value.replace(/\D+/,"");
    });
});

console.dir(texts);
console.dir(emails);
console.dir(tels);
console.dir(submits);

submits.forEach(submit => {
    submit.addEventListener("click", e => {
        e.preventDefault();
        let val = emails[e.target.id].value;
        //console.log();
        //const p =/^[a-z0-9_\.\-]+@([a-z0-9\-]+\.)+[a-z]{2,4}}$/i;
        
        if(!validateEmail(val)){
            alert("address is not correct");
        }
        else{
            console.log("submit");
        }
    });
});
    
 const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};