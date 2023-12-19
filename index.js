// const http = require('http'); // default method
import http from 'http'; // to create a server and many more
import fs from 'fs'; // this is to read any file coming from client or database or local and operation on then
import path from 'path'; //
import { Person } from './personlist.js';

console.log('Person', Person);

// create server from node
const vicky = new Person('vicky', 31, 5.9, 'panipat', 'house');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // read file , readfromFile is async function
    const fileData = fs.readFile('./index.html', (error, data) => {
      console.log('reading file ', error);
      console.log('reading file ', data);
      res.end(data);
      //   res.end('<h1>this is root request</h1>', );
    });
  } else if (req.url === '/about') {
    res.end(`<h1>this is about page data ${vicky.name} </h1>`);
  } else {
    res.end('<h1>not found </h1>');
  }
});

server.listen(8000, () => {
  console.log('server workingdcewcdewsc ');
});
