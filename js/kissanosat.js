
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const nameDisplay = item.querySelector('.name-display');
        const image = item.querySelector('#osaKuva');

        // Näytä nimi, kun kuvaa klikataan
        image.addEventListener('click', function() {
            // Piilota muut nimet
            gridItems.forEach(i => {
                if (i !== item) {
                    i.querySelector('.name-display').style.display = 'none';
                }
            });
            // Näytä tai piilota nimen näyttö
            if (nameDisplay.style.display === 'block') {
                nameDisplay.style.display = 'none'; // Piilotetaan, jos se on näkyvissä
            } else {
                nameDisplay.style.display = 'block'; // Näytetään, jos se on piilossa
            }
        });
    });
});

