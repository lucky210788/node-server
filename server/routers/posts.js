const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/posts/:id', function (req, res) {
  fs.readFile('./database/dbPosts.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    dataArr = dataArr.filter(post => post.userId === req.params.id);
    res.status(201).send(dataArr);
  });
});

router.post('/posts/:id', function (req, res) {
  fs.readFile('./database/dbPosts.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    const uuidv4 = require('uuid/v4');
    let post = {
      userId: req.params.id,
      id: uuidv4(),
      title: req.body.title
    };
    dataArr.unshift(post);
    let userPosts = dataArr.filter(post => post.userId === req.params.id);
    fs.writeFile('./database/dbPosts.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send(userPosts);
    });
  });
});

router.delete('/posts/:id', function (req, res) {
  fs.readFile('./database/dbPosts.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    dataArr = dataArr.filter(post => post.id !== req.params.id);
    fs.writeFile('./database/dbPosts.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send({});
    });
  });
});

router.put('/posts/:id', function (req, res) {
  fs.readFile('./database/dbPosts.json', 'utf8', function (err, data) {
    let dataArr = JSON.parse(data);
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].id === req.params.id) {
        dataArr[i].title = req.body.title;
      }
    }
    fs.writeFile('./database/dbPosts.json', JSON.stringify(dataArr), function (err, data) {
      res.status(201).send({});
    });
  });
});

module.exports = router;