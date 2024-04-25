let formfield = document.querySelector("#signup")

//add Event to the form field
formfield.addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
})
let fullname = document.querySelector("#fname")
let mailname = document.querySelector("#ename")
let mobile = document.querySelector("#pass")
let password= document.querySelector("#confirmpass")

function signup() {
    let fullnameValue = fullname.value.trim()
    let mailnameValue = mailname.value.trim().toLowerCase()
    let passValue = password.value.trim()
    let letters = /^[a-zA-Z\s']+$/;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let userdetail = {
        "flname": fullnameValue,
        "emailname": mailnameValue,
        "passwordname": passValue,
    }
    // get the mail value 
    const userinfo = JSON.parse(localStorage.getItem(mailnameValue));
    if (userinfo !== null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Account already exist'

        })
    }
    else {
        // condition 
        if (fullnameValue == "" && mailnameValue == "" && passValue == "" && cpassValue == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill input fields'

            })
            return false
        }
        else {
            
            if (!fullnameValue.match(letters) || fullnameValue.length < 3 ){

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username should be letters and min 3 characters'

                })
                return false
                
            }
            if (!mailnameValue.match(mailformat)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is not valid',

                })
                return false
            }
            if (passValue.length<4 ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password Lenght must be greater than 4',

                })
                return false
            }
            else {

                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job',
                        text: 'Sign up sucessfullly',

                    })
                }, 2000)

                setTimeout(() => {
                    location.href = "login.html"
                }, 4000)
            }
        }
        //set value in local storage
        localStorage.setItem(mailnameValue, JSON.stringify(userdetail));
    }

}

// password eye icon
let passf = document.querySelectorAll(".pass1")
let btn = document.querySelectorAll("span i");
for (let i = 0; i < passf.length; i++) {
    btn[i].onclick = function () {
        if (passf[i].type == "password") {
            passf[i].type = "text";
            btn[i].classList.add("hide-btn")
        }
        else {
            passf[i].type = "password";
            btn[i].classList.remove("hide-btn")

        }
    }
}

//focus password eye icon
let passfield = document.querySelectorAll(".passfield")
let show = document.querySelectorAll(".passfield span")
for (let i = 0; i < passfield.length; i++) {
    passfield[i].addEventListener("focusin", function () {
        show[i].style.display = "block";
    })
}








