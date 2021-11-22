import * as fs from 'fs';
import promptSync from 'prompt-sync';

const prompt = promptSync();
let keyword = prompt('Please enter your search keyword?');
let arr, result = [];


function search(callback) {
    try {
        const data = fs.readFileSync('./text-file.txt',
            { encoding: 'utf8', flag: 'r' });
        if (data) {
            arr = data.split(' ');
            arr.forEach((el) => {
                if (el.toLowerCase() == keyword.toLowerCase()) {
                    result.push(el);
                }
            });
            callback();
        } else {
            console.log('Error!!!')
        }
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
}

const printOutput = () => {
    if (result.length > 0) {
        console.log(`Number of occurrence = ${result.length}`);
    } else {
        console.log(`No occurrence founded`);
    }
}

search(printOutput);