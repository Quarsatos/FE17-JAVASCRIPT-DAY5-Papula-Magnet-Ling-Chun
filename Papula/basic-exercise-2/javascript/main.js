// Exercise 1

let darr = [];  

class car  {
  brand;
  model;
  year;
  type;
  hp;
  weight;
  img;
  info;
  wlink;

  constructor(brand, model, year, type, hp, weight, img, info, wlink){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.type = type ;
    this.hp = hp;
    this.weight = weight;
    this.img = img;
    this.info = info;
    this.wlink = wlink;

    darr.push(this);
  }
    print(){ 
      return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.brand} ${this.model} ${this.year}</h5>
        <p class="card-text">${this.info}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.type}</li>
        <li class="list-group-item">${this.hp}</li>
        <li class="list-group-item">${this.weight}</li>
      </ul>
      <div class="card-body">
        <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
      </div>
    </div>`;
  }
}

class motorbike extends car{
  country;

  constructor(brand, model, year, type, hp, weight, img, info, wlink, country){
    super(brand, model, year, type, hp, weight, img, info, wlink);
    this.country = country;
  }  
    print(){ 
      return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.brand} ${this.model} ${this.year}</h5>
        <p class="card-text">${this.info}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.type}</li>
        <li class="list-group-item">${this.hp}</li>
        <li class="list-group-item">${this.weight}</li>
        <li class="list-group-item">${this.country}</li>
      </ul>
      <div class="card-body">
        <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
      </div>
    </div>`;
  }
}

class animal  {
  race;
  weight;
  img;
  info;
  wlink;

  constructor(race, weight, img, info, wlink){
    this.race = race;
    this.weight = weight;
    this.img = img;
    this.info = info;
    this.wlink = wlink;

    darr.push(this);
  }
    print(){ 
        return `<div class="card" style="width: 18rem;">
          <img src="${this.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.race}</h5>
            <p class="card-text">${this.info}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.type}</li>
            <li class="list-group-item">${this.weight}</li>
          </ul>
          <div class="card-body">
            <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
          </div>
        </div>`;
  }
}

class fish extends animal{
  country;
  
  constructor(race, weight, img, info, wlink, country){
    super(race, weight, img, info, wlink);
    this.country = country;
  }
  print(){ 
    return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.race}</h5>
        <p class="card-text">${this.info}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.weight}</li>
        <li class="list-group-item">${this.country}</li>
      </ul>
      <div class="card-body">
        <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
      </div>
    </div>`;
  }
}
class person  {
  fname;
  lname;
  img;
  info;
  wlink;

  constructor(fname, lname, img, info,wlink){
    this.fname = fname;
    this.lname = lname;
    this.img = img;
    this.info = info;
    this.wlink = wlink;

    darr.push(this);
  }
    print(){ 
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.fname} ${this.lname}</h5>
          <p class="card-text">${this.info}</p>
        </div>
        <div class="card-body">
          <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
        </div>
      </div>`;
  }
}

class profession extends person{
  job;

  constructor(fname, lname, img, info,wlink,job){
    super(fname, lname, img, info,wlink)
    this.job =  job;
  }
  print(){ 
      return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.fname} ${this.lname}</h5>
        <p class="card-text">${this.info}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.job}</li>
      </ul
      <div class="card-body">
        <a href="${this.wlink}" target="_blank" class="card-link">More information</a>
      </div>
    </div>`;
  }

}

let car1 = new car("mercedes","AMG",2012,"Coupe","Hp 400","1t", "images/amg.webp", "All the stuff is made up","https://en.wikipedia.org/wiki/Mercedes-AMG");

let animal1 = new animal("british short hair","Weigth: 5kg","images/british.jfif","All   the stuff is made up again", "https://de.wikipedia.org/wiki/Britisch_Kurzhaar" );

let person1 = new person("Samuel L.","Jackson","images/samuel.jfif","Actor","https://en.wikipedia.org/wiki/Samuel_L._Jackson");

let motorbike1 = new motorbike("Ducati","Monster",2012,"90° V-Twin Engine","hp kp","some weight","images/ducati.jpg","some info","https://en.wikipedia.org/wiki/Ducati_Monster","italy" );

let fish1 = new fish("Goldfish","weight: up to 2,3kg","images/goldfish.jpg","some info", "https://de.wikipedia.org/wiki/Goldfisch","China");

let profession1 = new profession("Steve","Jobs","images/steve.jpg","some info","https://en.wikipedia.org/wiki/Steve_Jobs","CEO of Apple");



for (let val of darr) {
  document.getElementById("display").innerHTML += val.print();
}







