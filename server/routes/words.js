const express = require('express');
const router = express.Router();
const { newWord, getWords, updateWord, deleteWord } = require('../../models/Word');

function toProperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

router.get('/', async (req, res) => {
  res.status(200).send(await getWords());
});

router.get('/:search', async (req, res) => {
  const { search } = req.params;
  res.status(200).send(await getWords(search));
});

router.post('/', async (req, res) => {
  const { word, definition } = req.body;
  res
    .status(201)
    .send(await newWord({ word: word.trim(), definition: toProperCase(definition.trim()) }));
});

router.post('/update', async (req, res) => {
  const { _id, word, definition } = req.body;
  res
    .status(201)
    .send(await updateWord({ _id, word: word.trim(), definition: toProperCase(definition.trim()) }));
});

router.post('/delete', async (req, res) => {
  const { _id } = req.body;
  res
    .status(201)
    .send(await deleteWord({ _id }));
});

module.exports = router;
