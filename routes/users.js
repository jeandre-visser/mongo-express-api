import express from 'express';
const router = express.Router();
import User from '../models/user.js';

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a user
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    favoriteColor: req.body.favoriteColor,
  })

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Get one user
router.get('/:id', (req, res) => {
  const { id } = req.params;
})

// Update a user
router.patch('/:id', (req, res) => {
  
})

// Delete a user
router.delete('/:id', (req, res) => {
  
})

// Export router to use in index.js
export default router;