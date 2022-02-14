

let email = document.getElementById("email");

let send = document.getElementById("send");

email.focus()


send.addEventListener("click", () => {
        // @
    let character = "ABCDEFGHIJKLMNOÖPRSTQWUÜVYZÄXabcdefghijklmnoöprstuüvyzxqwä,.+*-0123456789@";
    
    let counterNo = 0;        

    for (i of email.value) {
        if ((character.includes(i) == false) || email.value.includes("@") == false){
            counterNo += 1;
        } 
    }
        ///  entension

    let indexDod = (email.value).length -1;

    for (let i = (email.value).length -1; i > (email.value).length -10; i--) {
        
        if (email.value[i] == ".") {
            break;
        }
         indexDod -= 1;
    }

    let extension = email.value.slice(indexDod + 1).length;

    if (2 <= extension &&  extension <= 4 && counterNo == 0) {
        alert("You have entered a valid E-Mail Address");
    }   else {
        alert("You have entered an invalid E-Mail Address");
    }
})