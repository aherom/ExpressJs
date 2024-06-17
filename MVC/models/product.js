const fs = require('fs');
const path = require('path');
const root = require('../util/path');
module.exports = class Product {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    save()
     { const productData = JSON.stringify(this) + '\n';
        fs.appendFile(path.join(root,'data','pro.json'), productData, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Product saved successfully!');
            }
        });
          
    }

   
    static fetchAll() {
        try {
            const data = fs.readFileSync(path.join(root,'data','pro.json'), 'utf-8');
            return data.trim().split('\n').map(line => JSON.parse(line));
        } catch (err) {
            return [];
        }
      
    }
};
