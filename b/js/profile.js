let inputs = document.querySelectorAll(".field"),
    stars = document.querySelectorAll(".first"),
    select = document.querySelectorAll('select');

for (i = 0; i < inputs.length; i++) {

    for (j = 0; j < stars.length; j++) {
        if (inputs[i].value !== "") {
            stars[i].style.display = "none";
        }

    }
}