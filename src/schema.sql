-- Buat file schema.sql
CREATE TABLE absensi_siswa (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  nis VARCHAR(20) NOT NULL,
  tanggal DATE NOT NULL,
  jam_hadir TIME NOT NULL,
  status VARCHAR(20) NOT NULL
);
