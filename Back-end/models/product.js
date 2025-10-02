
const db =require('../config/db');


// cadastrar produto


    const Product ={
        async register({ name, price, barcode }){
            const sql = 'INSERT INTO   products(name, price , barcode ) VALUES (?, ?, ?)';
            return new Promise ((resolve, reject)=>{
                db.query(sql,[name, price, barcode ],(err, result)=>{
                    if (err) return reject(err);
                    resolve(result)
                })
            })
        },
        


    async searchByCode(barcode){

        const  sql = 'SELECT * FROM products WHERE barcode  = ?';
        return new Promise((resolve, reject)=>{
            db.query(sql,[barcode],(err, result)=> {
                if (err) return reject(err)
                    resolve(result)
            })
        })
    }

    }

    module.exports= Product
             

         
