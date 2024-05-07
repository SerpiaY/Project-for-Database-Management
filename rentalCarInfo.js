document.getElementById('rentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const dateBook = document.getElementById("dateBook").value;
    const dateReturn = document.getElementById("dateReturn").value;

    console.log("Saving Location:", location);
    console.log("Saving Pick-Up Date:", dateBook);
    console.log("Saving Return Date:", dateReturn);

    localStorage.setItem("location", location);
    localStorage.setItem("dateBook", dateBook);
    localStorage.setItem("dateReturn", dateReturn);

    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});