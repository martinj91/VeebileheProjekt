const mobileBtn = document.getElementById('mobiil-cta');
var nav = document.querySelector('nav');
var sisu = document.querySelector("body")
const mobileBtnExit = document.getElementById('mobiil-välju');

mobileBtn.addEventListener('click', () => {
    nav.style.right = '0';
    sisu.style.marginRight = '250px';
})

mobileBtnExit.addEventListener('click', () => {
    nav.style.right = '-250px';
    sisu.style.marginRight = '0';
})

// https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/ : tekitasin selle skriptiga nupu, mis ilmub siis, kui kasutaja on kerinud rohkem kui 90% veebilehe ulatuses alla, et saaks mugavalt ühe klikiga tagasi avalehe ülalossa kerida.//
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.9) {
        scrollToTopBtn.classList.add("showBtn");
    } else {
        scrollToTopBtn.classList.remove("showBtn");
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
// https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/ //

// https://www.youtube.com/watch?v=2ak37WrbSDg : tekitasin sellega veebilehe alglaadimise animatsiooni, mis kuvab kõigepealt hüpleval viisil logo ning seejärel avaneb sujuvalt vaade kogu avalehele tumeda tausta tagant//
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-päis');
let logoSpan = document.querySelectorAll('.logo-intro');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 2)
            })
        }, 1750);

        setTimeout(()=>{
            intro.style.top = '100vh';
        }, 2200)
    })
})
// https://www.youtube.com/watch?v=2ak37WrbSDg //

// https://www.youtube.com/watch?v=IxziwuuaS3c&t=1398s : selle skripti abil tekitasin kontrolli kontaktivormi täitmise üle, et tekiksid punast värvi errorid, kui kõik lahtrid ei ole täidetud ning ka e-mail ei ole korrektsel kujul sisestatud.//
const form = document.querySelector("form");
const fullName =  document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess =  document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nimi: ${fullName.value}<br> E-mail: ${email.value}<br>
    Telefon: ${phone.value}<br> Sõnum: ${mess.value}`;

    Email.send({
        SecureToken: "a270c788-ea75-48bf-b41c-08a6788cb77d",
        To: "sandersirge@gmail.com",
        From: "projekt.kontaktivorm@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Saadetud!",
                    text: "Teie sõnum on kätte saadud!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }
        
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "*Sisesta sobiv e-posti aadress";
        }
        else {
            errorTxtEmail.innerText = "*E-posti aadressi lahter ei saa olla tühi";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") 
    && !phone.classList.contains("error") && !subject.classList.contains("error") 
    && !mess.classList.contains("error")) {
        sendEmail();
        form.reset();
        return false;
    }
});
// https://www.youtube.com/watch?v=IxziwuuaS3c&t=1398s //