// let buttons = document.querySelectorAll("contact");
// let form = document.querySelector("pop-up").style.display;

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = () => {
//         form = "block";
//     }
// }

document.getElementById("trigger").onclick = function() {
    open();
};

function open() {
    document.getElementById("menu").classList.toggle("show");
}
