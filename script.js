// ===============================
// MENU FILTER
// ===============================

function filterMenu(category) {

    const items = document.querySelectorAll(".food-item");

    items.forEach(function(item) {

        if (category === "all") {

            item.style.display = "block";

        } 
        else if (item.classList.contains(category)) {

            item.style.display = "block";

        } 
        else {

            item.style.display = "none";

        }

    });
}



// ===============================
// RESERVATION FORM
// ===============================

const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const confirmation =
        document.getElementById("confirmation");

    confirmation.innerHTML =
        "Thank you " + name +
        "! Your table has been reserved for " +
        date + " at " + time + ".";

    form.reset();

});