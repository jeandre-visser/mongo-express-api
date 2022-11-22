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
router.post('/', (req, res) => {

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