const express = require('express');
const librosRoutes = require('./routes/libros');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/libros', librosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    message: 'API de Libros funcionando correctamente',
    endpoints: {
      obtenerTodos: 'GET /api/libros'
    }
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error no manejado:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: err.message
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

