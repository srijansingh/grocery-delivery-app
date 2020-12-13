
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('cart.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS carting (id INTEGER PRIMARY KEY NOT NULL, userid TEXT NOT NULL, productid TEXT NOT NULL, imageurl TEXT NOT NULL, title TEXT NOT NULL, quantity INTEGER NOT NULL, costprice INTEGER NOT NULL, sellingprice INTEGER NOT NULL, total INTEGER NOT NULL);', 
            [],
            (_,result) => {
                resolve(result)
            },
            (_, err) => {
                reject(err)
            }
            );
        })
    });
    return promise;
}


export const insertCart = (userid, productid, imageurl, title, quantity, costprice, sellingprice, total) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO carting (userid, productid, imageurl, title, quantity, costprice, sellingprice, total) VALUES(?, ?, ?, ?, ?, ?, ?, ?);`, 
            [userid,productid,imageurl,title,quantity,costprice, sellingprice,total],
            (_, result) => {
                resolve(result) 
            },
            (_, err) => {
                console.log('Promise err', err)
                reject(err)
            }
            );
        })
    })
    return promise;
}


export const getCartData = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM carting', 
            [],
            (_, result) => {
                resolve(result)
            },
            (_, err) => {
                reject(err)
            }
            );
        })
    });
    return promise;
}