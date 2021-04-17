const el = document.querySelector('#codep');
const parentVilleItem = document.querySelector('#container-villes');

el.addEventListener('input', testFetch);

function testFetch(){
    if(this.value.length === 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        fetch(url)
            .then( res => { // res : reponse de la requete
                res.json().then( data => {
                    console.log(data);

                    for (const city of data) {
                        const template = `<li class="container-villes__item">${city.nom} , ${city.code}, ${city.population} habitants</li>`;
                        parentVilleItem.insertAdjacentHTML('beforeend', template);
                    } 
                });
            })
            .catch(err => console.log('Erreur : ' + err));
    }else{
        parentVilleItem.textContent=" ";
    }
}