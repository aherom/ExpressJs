const db = require('../util/database')
module.exports = class Product {
    constructor(name, size,photo,Derscription,price) {
        this.name = name;
        this.size = size;
        this.photo= photo;
        this.Derscription=Derscription;
        this.price=price;
    }

    save()
     { 
        
        db.execute(` insert into products (tittle,size,photo,description,price)
         values('${this.name}',${this.size},'${ this.photo}','${this.Derscription}'
         ,${this.price});`);
    }

   
    static fetchAll() {
        return db.execute('SELECT * FROM products');
      
    }
};
