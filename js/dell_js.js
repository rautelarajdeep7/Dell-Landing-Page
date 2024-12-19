// Hamburger and its backdrop toggle for Tablet
function ham_toggle_tab() {
    document.querySelector(".tab_ham_hide").classList.toggle("tab_ham_show")
    document.querySelector(".backdrop_hide_tab").classList.toggle("backdrop_show_tab");
    document.getElementsByTagName("body")[0].classList.toggle("body_overflow_stop");
}

// Hamburger and its backdrop toggle for Mobile
function ham_toggle_mobile() {

    document.querySelector(".mobile_ham_hide").classList.toggle("mobile_ham_show")
    document.querySelector(".backdrop_hide_mobile").classList.toggle("backdrop_show_mobile");
    document.getElementsByTagName("body")[0].classList.toggle("body_overflow_stop");
}

// Like functionality for Heart
// -------------------------------------------------- Method 1 --------------------------------------------------
function like(index) {
    document.querySelectorAll(".fa-heart")[index].classList.toggle("red_heart");
    /* passed an int value as argument from each fa-heart icon's onclick like() call, so that when multiple hearts call the same like() function, values of toggle
    function runs for that particular like/heart button and prevents changing toggle for other fa-heart class icons  */
}

// -------------------------------------------------- Method 2 --------------------------------------------------

/* This same thing which we did above for like(), can be done using event listener and in that we are not required to pass a value from each onclick like() 
    function as argument.
    It is useful when we have lot of card using the heart icons OR when the cards are getting dynamically generated. 
*/

// let l = document.querySelectorAll(".fa-heart").length;      
/* It was showing length 0 and no classes were being found. It happened bcz icons were getting fetched from a cdn and before they are 
   available our script started to run.
   So, to solve this, instead of writing script tag in <head> I had to write it at the last in <body> OR we can use "defer" inside script tag.

   If we are writing external script in <head>, then we can use defer like this:     <script src="./js/dell_js.js" defer></script>
        Definition and Usage
            The defer attribute is a boolean attribute.

    If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
    Note: The defer attribute is only for external scripts (should only be used if the src attribute is present).

    Refer: https://www.w3schools.com/tags/att_script_defer.asp

*/

// console.log(l)

// for (let i = 0; i < l; i++) {
//     document.querySelectorAll(".fa-heart")[i].addEventListener("click", () => {
//         document.querySelectorAll(".fa-heart")[i].classList.toggle("red_heart");

//     })
// }

// -------------------------------------------------- Method 3 --------------------------------------------------




// ----------------------------------------------------------------------------------------------------------------




// FAQ section
// function upside_down_arrow(){
//     document.querySelector(".question>div:nth-child(2)").classList.toggle("down")
// }

function expand_faq(e) {
    console.log("question", e.target);
    e.target.parentElement.classList.toggle("expand_class");        // Selecting parent element (i.e. main class) of the target(box class)
    e.target.nextElementSibling.classList.toggle("answer_scroll");
    // upside_down_arrow();
    e.target.children[0].classList.toggle("down");
}

function expand_faq2(e) {               // for div of angle up icon
    console.log("angle div", e.target);
    e.stopPropagation();
    e.target.parentElement.parentElement.classList.toggle("expand_class");    // Selecting parent element (i.e. main class) of the target(box class)
    // upside_down_arrow();
    e.target.classList.toggle("down");
}

function expand_faq3(e) {               // for icon tag of angle up icon
    console.log("angle", e.target);
    e.stopPropagation();
    e.target.parentElement.parentElement.parentElement.classList.toggle("expand_class");    // Selecting parent element (i.e. main class) of the target(box class)
    // upside_down_arrow();
    e.target.parentElement.classList.toggle("down");
}


// Timeout Form section

function timeout_form_toggle() {
    document.querySelector(".timeout_form_hide").classList.toggle("timeout_form_show");
    document.querySelector(".backdrop_hide_form").classList.toggle("backdrop_show_form");
}

setTimeout(timeout_form_toggle, 2000);


//Card Counter Increment 
let card = document.querySelectorAll(".counter>div>div:nth-child(1)");

// This function increments the numbers inside card
function counter_cards_interval() {
    let interval_time = 80;
    let card1, card2, card3;

    let n1 = 1;
    card1 = setInterval(() => {
        card[0].innerHTML = `<div>${n1}+</div>`;
        n1++;
        if (n1 == 31) {
            clearInterval(card1);
        }
    }, interval_time);


    let n2 = 1;
    card2 = setInterval(() => {
        card[1].innerHTML = `<div>${n2}+</div>`;
        n2++;
        if (n2 == 28) {
            clearInterval(card2);
        }
    }, interval_time);

    let n3 = 1;
    card3 = setInterval(() => {

        card[2].innerHTML = `<div>${n3}</div>`;
        n3++;
        if (n3 == 18) {
            clearInterval(card3);
        }
    }, interval_time);


}


//timeout form validation
function Check(e) {

    let pattern;
    let input;

    if (e.target.getAttribute("name") === 'username') {
        pattern = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
        input = e.target.value;
    }

    else if (e.target.getAttribute("name") === 'pass') {
        // pattern = /^[^a-zA-Z0-9]*[a-zA-Z0-9]*$/;
        pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
        /*
        This regex matches only when all the following are true:

        password must contain 1 number (0-9)
        password must contain 1 uppercase letters
        password must contain 1 lowercase letters
        password must contain 1 non-alpha numeric number
        password is 8-16 characters with no space
        */
        input = e.target.value;
    }

    else if (e.target.getAttribute("name") === 'email') {
        pattern = /^[a-zA-Z]+[a-zA-Z0-9]*[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z]+$/;
        input = e.target.value;
    }
    else if (e.target.getAttribute("name") === 'mobile') {
        pattern = /^[6-9]{1}[0-9]{9}$/;
        input = e.target.value;
    }
    else {

    }


    if (!pattern.test(input)) {
        if (input == "") {
            e.target.nextElementSibling.innerText = "";
        }
        else {
            e.target.nextElementSibling.classList.remove("NoError")
            e.target.nextElementSibling.innerText = "Invalid input";
            e.target.nextElementSibling.style.visibility = "visible";
        }
    }
    else {
        e.target.nextElementSibling.classList.add("NoError")
        e.target.nextElementSibling.innerText = "OK";
        e.target.nextElementSibling.style.visibility = "visible";
    }
}

// function Mobile(e) {
//     let pattern = /^[6-9]{1}[0-9]{9}$/;
//     let input = e.target.value;
//     console.log(e.target)

//     if (!pattern.test(input)) {
//         if (input == "") {
//             e.target.nextElementSibling.innerText = "";
//         }
//         else {
//             e.target.nextElementSibling.classList.remove("NoError")
//             e.target.nextElementSibling.innerText = "Invalid input";
//             e.target.nextElementSibling.style.visibility = "visible";
//         }
//     }
//     else {
//         e.target.nextElementSibling.classList.add("NoError")
//         e.target.nextElementSibling.innerText = "OK";
//         e.target.nextElementSibling.style.visibility = "visible";
//     }
// }



// setTimeout(counter_cards_interval, 3000);   // This is to increment counter in cards, 3seconds after this this statement runs, i.e. it runs after page loading.



// This code will run counter only one time when we have scrollled >=450
let counter_call = setInterval(() => {

    if (window.scrollY >= 450) {
        counter_cards_interval();
        clearInterval(counter_call)
    }

}, 500)

/*
// This code will run counter every time when offsetTop>=400

let counter_box = document.querySelector(".counter");

function trigger_cards_counter() {

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const box_position = counter_box.offsetTop;
        console.log("scolled : ",scrolled, " box position : ", box_position);
        if (scrolled >= 440) {
            console.log("iff")
            counter_cards_interval();
        }
    })
}
trigger_cards_counter(); 
*/







