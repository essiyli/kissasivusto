const apiKey = 'live_vWmVXl7VQjNKsNvm80ea4ykzxEayV4UYA5ephshQnAOx6m2WaB1cVXwtcQl17IU7'
       
const kissaKuvaTehtava = document.getElementById('tehtavaKuva')

let oikeaVastaus = 'tail'

let catImage = document.querySelector('#cat-image')

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('img').forEach(function(img){
       img.onerror = function(){this.style.display='none';};
    })
 });



document.querySelector('#randomTehtava').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('moi')
    let kayttajanVastaus = document.querySelector('input').value.toLowerCase()
    console.log(kayttajanVastaus)

    if (kayttajanVastaus === oikeaVastaus){
            kissaKuvanArpoja()
            document.querySelector('input').value =''
            uusiTehtava()
        } else {
            document.querySelector('input').value ='';
            catImage.src = 'wronganswer.png'
            
        }

    
    
    })


//päivitetään uusi kuva tehtävään muuttujan kissaKuvaTehtava-avulla ja uusi arvo muuttujalle oikeaVastaus

const uusiTehtava = () => {
    let randomNum = Math.ceil(Math.random() * 6)
    console.log(randomNum)
    console.log(kissaKuvaTehtava)
    
    switch (randomNum) {
    case 1:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'tail';
        break;
    case 2:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'ear';
        break;
    case 3:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'back';
        break;
    case 4:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'paw'
        break;
    case 5:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'tummy'
        break;
    case 6:
        kissaKuvaTehtava.src = './kissa' + randomNum + '.png';
        oikeaVastaus = 'whiskers'
        break;
    }
}
    
const kissaKuvanArpoja = () => {
    fetch('https://api.thecatapi.com/v1/images/search', {
                headers: {
                    'x-api-key': apiKey
                }
            })
            .then(response => response.json())
            .then(data => {
                const img = new Image(); // Luodaan uusi kuvaelementti
                img.src = data[0].url;

                img.onload = () => {
                    const aspectRatio = img.naturalWidth / img.naturalHeight;

                    // Jos kuvan korkeus on yli 1.5 kertaa leveys (liian korkea), hylätään kuva
                    if (aspectRatio < 1) {
                        console.log('Hylätään liian korkea kuva, haetaan uusi...');
                        kissaKuvanArpoja(); // Haetaan uusi kuva
                    } else {
                        catImage.src = img.src; // Asetetaan hyväksytty kuva
                    }
                };
            })
            .catch(error => {
                console.error('Error fetching the cat image:', error);
            });
}