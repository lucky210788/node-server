const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/users', function (req, res) {
  fs.readFile('./database/dbUsers.json', 'utf8', function (err, data) {
    res.status(201).send(JSON.parse(data));
  });
});

router.post('/users', function (req, res) {
  fs.readFile('./database/dbUsers.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    const uuidv4 = require('uuid/v4');
    let newUser = {
      id: uuidv4(),
      name: req.body.name
    };
    dataArr.unshift(newUser);
    fs.writeFile('./database/dbUsers.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send(dataArr);
    });
  });
});

router.delete('/users/:id', function (req, res) {
  fs.readFile('./database/dbUsers.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    dataArr = dataArr.filter(user => user.id !== req.params.id);
    fs.writeFile('./database/dbUsers.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send({});
    });
  });
});

router.put('/users/:id', function (req, res) {
  fs.readFile('./database/dbUsers.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].id === req.params.id) {
        dataArr[i].name = req.body.name;
      }
    }
    fs.writeFile('./database/dbUsers.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send({});
    });
  });
});

module.exports = router;