let deckId = "3qetepz1hdag";
const deck = new Deck(deckId);

function Deck(deckId) {  //função construtora
    this.deckId = deckId;
    this.listOfCards = "4C,7H,AS,7D,3C,3H,3S,3D,2C,2H,2S,2D,AC,AH,AD,KC,KH,KS,KD,JC,JH,JS,JD,QC,QH,QS,QD"

    this.gerarBaralho = function () {

        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${this.listOfCards}`)
            .then(converterParaJson)
            .then(atualizarInfo)
            .catch(erro => alert(erro));
    }



    this.olharcartas = function () {

        fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=3`)


            .then(converterParaJson)
            .then(atualizarInfo)
            .then(imprimeTabela)
            .then(mostrarCartas)
            .catch(erro => alert(erro));
    }

    this.Reembaralhar = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
            .then(converterParaJson)
            .then(atualizarInfo)
            .catch(erro => alert(erro));

        // console.log(jsonData);
        // if (jsonData.success) {
        alert("Reembaralhado com sucesso!");
        // }
        // })
    }
    const mostrarCartas = (jsonData) => {
        const cards = jsonData.cards;
        console.log(jsonData)

        for (let i = 0; i < 3; i++) {
            const id = `carta${i + 1}`;

            const card = document.getElementById(id);
            let img = card.querySelector('img');

            if (img == null) {
                img = document.createElement('img');
            }

            img.setAttribute('src', cards[i].image);
            card.append(img);
        }
    }

    this.Reembaralhar = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
            .then(converterParaJson)
            .then(atualizarInfo)
            .catch(erro => alert(erro));

        // console.log(jsonData);
        // if (jsonData.success) {
        alert("Reembaralhado com sucesso!");
        // }
        // })
    }

    const atualizarInfo = (jsonData) => {
        console.log(jsonData)
        if (!jsonData.success)
            throw new Error("Erro ao acessar dados da api");
        // const deck_id = jsonData.deck_id;
        this.deckId = jsonData.deck_id;
        const remaining = jsonData.remaining;
        const info1 = document.getElementById("deck_id");
        const info2 = document.getElementById("remaining");
        info1.innerText = this.deckId;
        info2.innerText = remaining;
        // console.log(info2)
        console.log(jsonData.deckId)
        return jsonData;
    }
}
// const deck1 = new Deck("id1");
// const deck2 = Deck("id2");
// console.log(deck1);
// console.log(deck2);
// console.log(Deck);
// console.log(Deck.deckId);

function converterParaJson(data) {
    const obj = data.json();
    return obj;
}
function gerarBaralho() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=4C,7H,AS,7D,3C,3H,3S,3D,2C,2H,2S,2D,AC,AH,AD,KC,KH,KS,KD,JC,JH,JS,JD,QC,QH,QS,QD")
        .then(converterParaJson)
        .then(atualizarInfo)
        .catch(erro => alert(erro));

}

function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "sult"]);
    console.log('restam', json.remaining, 'cartas')

    return json;

}