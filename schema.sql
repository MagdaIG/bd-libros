-- Crear la base de datos (ejecutar primero si no existe)
-- CREATE DATABASE librosdb;

-- Conectarse a la base de datos librosdb y ejecutar:
CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor TEXT NOT NULL,
  anio INT
);

-- Insertar algunos registros de ejemplo
INSERT INTO libros (titulo, autor, anio) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 1967),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605),
('1984', 'George Orwell', 1949),
('El Principito', 'Antoine de Saint-Exupéry', 1943),
('La Odisea', 'Homero', -800);

