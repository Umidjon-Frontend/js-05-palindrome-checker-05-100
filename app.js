const chekcBtn = document.querySelector(".check-btn");
const textInput = document.querySelector(".input");
const textOutput = document.querySelector(".show-text h1");

chekcBtn.addEventListener("click", () => {
    if (textInput.value) {
        1-Usul
        let start = textInput.value.toLowerCase();
        console.log(typeof start);
        let end = [...start].reverse().join("").toLowerCase();
        console.log(typeof end);

        if (start === end) {
            textOutput.innerHTML = `${start} is a palindrome`;

        } else {
            textOutput.innerHTML = `${start} is NOT a palindrome`;
        }

        // 2-Usul  CIVIC  Rotavator 9/2
        // let len = textInput.value.length;
        // let start = textInput.value.substring(0, Math.floor((len / 2))).toLowerCase();
        // console.log(start);
        // let end = textInput.value.substring(len - Math.floor((len / 2))).toLowerCase();
        // console.log(end);
        // let text  = [...end].reverse().join("").toLowerCase();
        // if (start === text) {
        //     textOutput.innerHTML = `${textInput.value} is a palindrome`;

        // } else {
        //     textOutput.innerHTML = `${textInput.value} is NOT a palindrome`;
        // }
    } else {
        alert("input is not a valid");
    }
});
