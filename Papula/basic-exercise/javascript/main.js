// Exercise 1

let car = {
    brand: "Dodge",
    model: "Charger",
    year: "1969",
    type: "Muscle Car",
    hp: "Horsepower: 117-354",
    weight: "Weight empty: 1586-1654 kg",
    img:  "images/1969_Dodge_Charger.jpg",
    info: "The Dodge Charger is a model of automobile marketed by Dodge in various forms over seven generations since 1966.",
    print: function(){ 
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model} ${this.year}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Type: ${this.type}</li>
          <li class="list-group-item">${this.hp}</li>
          <li class="list-group-item">${this.weight}</li>
        </ul>
        <div class="card-body">
          <a href="https://en.wikipedia.org/wiki/Dodge_Charger" target="_blank" class="card-link">More information</a>
        </div>
      </div>`;
    }
}
let animal = {
    cat_race: "Bengal Cat",
    type: "",
    weight: "Weight &#216: 4kg-5,5kg  ",
    img: "images/bengal-cat.jpg",
    info: 'The Bengal breed was more fully developed by the 1980s. "In 1992 The International Cat Association had 125 registered Bengal Breeders. "By the 2000s, Bengals had become a very popular breed. In 2019, there were nearly 2,000 Bengal breeders worldwide.',

    print: function(){
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.cat_race}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Type: ${this.type}</li>
          <li class="list-group-item">${this.weight}</li>
        </ul>
        <div class="card-body">
          <a href="https://en.wikipedia.org/wiki/Bengal_cat" target="_blank" class="card-link">More information</a>
        </div>
      </div>`;
    }
}
let person = {
    fname: "Guido",
    lname: "van Rossum",
    profession: "Softwaredeveloper",
    weight: "Weight empty: 1586-1654 kg",
    img: "images/guido_van_rossum.jpg",
    info: 'Guido van Rossum (Dutch: [ˈɣido vɑn ˈrɔsʏm, -səm]; born 31 January 1956) is a Dutch programmer best known as the creator of the Python programming language, for which he was the "benevolent dictator for life" (BDFL) until he stepped down from the position on 12 July 2018. He remained a member of the Python Steering Council through 2019, and withdrew from nominations for the 2020 election.',
    print: function(){
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fname} ${this.lname}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <div class="card-body">
          <a href="https://de.wikipedia.org/wiki/Guido_van_Rossum" target="_blank" class="card-link">More information</a>
        </div>
      </div>`;
    }
}



document.getElementById("display").innerHTML = car.print();
document.getElementById("display").innerHTML += animal.print();
document.getElementById("display").innerHTML += person.print();




