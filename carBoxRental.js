document.addEventListener("DOMContentLoaded", function () {
    var params = new URLSearchParams(window.location.search);
    var carId = params.get('car');

    var carData = {
        'lincoln-navigator-2023': {
            name: "2023 Lincoln Navigator",
            price: "$77,635",
            lease: "$1,533 /month",
            imageUrl: "img/2023LincolnCar.jpg"
        },
        '2024-mazda-cx-50': {
            name: "2024 Mazda CX-50",
            price: "$32,205",
            lease: "$581 /month",
            imageUrl: "img/2024Mazda.jpeg"
        },
        '2024-nissan-rouge': {
            name: "2024 Nissan Rouge",
            price: "$40,890",
            lease: "$641 /month",
            imageUrl: "img/2024Nissa.jpg"
        },
        '2024-jeep-grand': {
            name: "2024 Jeep Grand",
            price: "$58,635",
            lease: "$799",
            imageUrl: "img/2024Jeep.jpg"
        },
        '2024-kia-ev6': {
            name: "2024 Kia EV6",
            price: "$49.987",
            lease: "$680",
            imageUrl: "img/2024KIA.jpeg"
        },
        '2023-ford-f150': {
            name: "2023 Ford F150",
            price: "$57,086 ",
            lease: "$721 ",
            imageUrl: "img/Ford.jpg"
        }

    };

    var carDetailsElement = document.getElementById('carDetails');

    var carDetails = carData[carId] || {};

    if (carDetails.name) {
        carDetailsElement.innerHTML = `
            <h1>Details for ${carDetails.name}</h1>
            <p>Price: ${carDetails.price}</p>
            <p>Lease: ${carDetails.lease}</p>
            <img src="${carDetails.imageUrl}" alt="${carDetails.name}" style="width:100%; height:200px; border-radius: 1rem;
            object-fit: cover;
            object-position: center;">
        `;
    } else {
        carDetailsElement.innerHTML = "<p>Car details not found.</p>";
    }
});
