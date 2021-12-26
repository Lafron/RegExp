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


submits.forEach(submit => {
    submit.addEventListener("click", e => {
        e.preventDefault();
        let val = emails[e.target.id].value;
        
        if(!validateEmail(val)){
            alert("address is not correct");
            emails[e.target.id].value = "";
        }
        else{
            alert("submit");
        }
    });
});
    
 const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
        /[\-\.\w]+@([\w]+\.)+[\w]+/gi
    );
};