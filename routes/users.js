import express from 'express';
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  
})
// Get one user
router.get('/:id', (req, res) => {
  const { id } = req.params;
})

// Create a user
router.post('/', (req, res) => {
  
})

// Update a user
router.patch('/:id', (req, res) => {
  
})

// Delete a user
router.delete('/:id', (req, res) => {
  
})

// Export router to use in index.js
export default router;