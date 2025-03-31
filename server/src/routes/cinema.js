const express = require('express');
const auth = require('../middlewares/auth');
const upload = require('../utils/cloudinary');
const Cinema = require('../models/cinema');
const userModeling = require('../utils/userModeling');

const router = new express.Router();

// Create a cinema
router.post('/cinemas', auth.enhance, async (req, res) => {
  const cinema = new Cinema(req.body);
  try {
    await cinema.save();
    res.status(201).send(cinema);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/cinemas/photo/:id', upload.single('file'), async (req, res, next) => {
  const{file}=req.file
  console.log(file)
  const movieId = req.params.id;
  try {
    if (!req.file) {
      return res.status(400).json({ error: { message: 'Please upload a file' } });
    }

    const cinema = await Cinema.findById(movieId);
    if (!cinema) return res.sendStatus(404);
    cinema.image = req.file.path;
    await cinema.save();

    res.json({ cinema, imageUrl: req.file});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: { message: 'Error uploading file' } });
  }
});


// Get all cinemas
router.get('/cinemas', async (req, res) => {
  try {
    const cinemas = await Cinema.find({});
    res.send(cinemas);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get cinema by id
router.get('/cinemas/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const cinema = await Cinema.findById(_id);
    if (!cinema) return res.sendStatus(404);
    return res.send(cinema);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// Update cinema by id
router.patch('/cinemas/:id', auth.enhance, async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'ticketPrice', 'city', 'seats', 'seatsAvailable'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' });

  try {
    const cinema = await Cinema.findById(_id);
    updates.forEach((update) => (cinema[update] = req.body[update]));
    await cinema.save();
    if (!cinema) return res.sendStatus(404);
    return res.send(cinema);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// Delete cinema by id
router.delete('/cinemas/:id', auth.enhance, async (req, res) => {
  const _id = req.params.id;
  try {
    const cinema = await Cinema.findByIdAndDelete(_id);
    if (!cinema) return res.sendStatus(404);
    return res.send(cinema);
  } catch (e) {
    return res.sendStatus(400);
  }
});

// Cinema User modeling (GET ALL CINEMAS)
router.get('/cinemas/usermodeling/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const cinemas = await Cinema.find({});
    const cinemasUserModeled = await userModeling.cinemaUserModeling(cinemas, username);
    res.send(cinemasUserModeled);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
