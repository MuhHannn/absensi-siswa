// pages/api/absensi.js
import pool from "../../utils/db";

export default async function handler(req, res) {
  const client = await pool.connect();

  try {
    if (req.method === "POST") {
      const { nama, nis, tanggal, jam_hadir, status } = req.body;
      const query =
        "INSERT INTO absensi_siswa (nama, nis, tanggal, jam_hadir, status) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [nama, nis, tanggal, jam_hadir, status];
      const result = await client.query(query, values);
      res.status(201).json(result.rows[0]);
    } else if (req.method === "GET") {
      const query = "SELECT * FROM absensi_siswa";
      const result = await client.query(query);
      res.status(200).json(result.rows);
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    client.release();
  }
}
