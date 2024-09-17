function olharCartas() {
    fetch('https://deckofcardsapi.com/api/deck/5yymdmpms2fr/draw/?count=3')
        .then(data => {
            const obj = data.json();
            return obj
        }).then(json => {
            const cards = json.cards;
            for (let i = 0; i < 3; i++) {
                const id = `carta${i + 1}`;
                const card = document.getElementById(id);
                let img = card.querySelector('img')
                //const img = document.createElement('img')
                if (img == null) {
                    img = document.createElement('img');
                }
                img.setAttribute('src', cards[i].image);
                card.append(img);
            }
            /*const card1 = document.getElementById("carta1");
            const card2 = document.getElementById("carta2");
            const card3 = document.getElementById("carta3");
            const img1 = document.createElement('img')
            const img2 = document.createElement('img')
            const img3 = document.createElement('img')
            img1.setAttribute('src', cards[0].image);
            img2.setAttribute('src', cards[1].image);
            img3.setAttribute('src', cards[2].image);
            card1.append(img1);
            card2.append(img2);
            card3.append(img3);

            return cards
        */})
}
function reembaralhar() {
    fetch('https://deckofcardsapi.com/api/deck/5yymdmpms2fr/shuffle/')
        .then(data => {
            const obj = data.json();
            return obj
        })
        .then(json => {
            if (json.success) {
                alert("Embaralhado com sucesso")
            } else { alert("ocorreu um erro") }
        })
}