const mongoose = require('mongoose');
function removeNonAlphabetic(str) {
  return str.replace(/[^a-zA-Z\-]/g, '');
}

const schema = mongoose.Schema({
  word: {
    type: String,
    unique: true,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Word =
  mongoose.models.Word || mongoose.model('Word', schema);

module.exports = {
  getWords: async (input) => {
    try {
      let query = {};
      if (input) {
        const search = removeNonAlphabetic(input);
        const regex = new RegExp('^' + search, 'i');
        query = { word: regex };
      }

      return await Word.find(query).sort({ created: -1 });
    } catch (error) {
      console.error(error);
    }
  },
  newWord: async (word) => {
    try {
      const newWord = new Word(word);
      await newWord.save();
      return newWord;
    } catch (error) {
      console.error(error);
    }
  },
  updateWord: async ({ _id, ...update }) => {
    try {
      return await Word.findOneAndUpdate(
        { _id },
        update,
        { new: true }
      ).exec();
    } catch (error) {
      console.log(error);
    }
  },
  deleteWord: async (query) => {
    return await Word.deleteMany(query).exec();
  }
};
