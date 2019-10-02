const csv = require('fast-csv');
const fs = require('fs');
const faktur = require('./faktur');
const objectFaktur = require('./of');
const data_list = [];
const raw = {};

const setFk = (data) => {
    let fk = new faktur(data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
    fk.getFaktur();
};

const setOf = (data) => {
    let of = new objectFaktur(data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10]);
    of.getOf();
};

fs.createReadStream('data.csv')
    .on('error', (err) => {
        console.log(err)
    })
    .pipe(csv.parse({ headers: false, delimiter: ";", rowDelimiter: '\n' }))
    .on('data', (row) => {
        data_list.push(row)
    })
    .on('end', () => {
        for (var i = 3; i < data_list.length; i++) {
            if (data_list[i][0] == "FK") {
                setFk(data_list[i]);
            } else if (data_list[i][0] == "OF") {
                setOf(data_list[i]);
            } else {
                console.log("Tidak ada yang bisa di Akses");
            }
        }
    });
