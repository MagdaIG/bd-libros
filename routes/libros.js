const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM libros ORDER BY id');
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los libros',
      error: error.message
    });
  }
});

module.exports = router;

