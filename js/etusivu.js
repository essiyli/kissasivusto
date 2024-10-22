let muuttuvaAlkuteksti =  document.querySelector('#muuttuvaAlkuteksti')



document.querySelector('#nameForm').addEventListener('submit', function(event) {
    event.preventDefault()
    let userName = document.querySelector('#userName').value
    localStorage.setItem('userName', userName)
    muuttuvaAlkuteksti.innerHTML = `Hei ${userName}! Valitse, mitä haluaisit tehdä seuraavaksi!`
    document.querySelector('#nameForm').style.display = 'none'
} )


window.addEventListener('DOMContentLoaded', function() {
    let tallennettuNimi = localStorage.getItem('userName'); // Hae nimi Local Storagesta
    if (tallennettuNimi) {
        // Jos nimi on tallennettu, päivitä teksti
        muuttuvaAlkuteksti.innerHTML = `Hei ${tallennettuNimi}! Valitse, mitä haluaisit tehdä seuraavaksi!`
        // Piilotetaan nimi-kenttä ja lomake, koska nimi on jo tallennettu
        document.querySelector('#nameForm').style.display = 'none';
    }
});