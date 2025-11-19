/** ===========================================
 *  db.js — Mongo connection helper
 *  -------------------------------------------
 *  TASK DB-1:
 *    - Export connectDB() that connects Mongoose using MONGO_URL
 *    - Log success; throw on failure
 */
import mongoose from "mongoose";

export async function connectDB(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[DB] Mongo connected successfully");
  } catch (err) {
    console.error("[DB] Connection failed:", err.message);
    throw err;
     // Important: rethrow so server stops if DB fails
  }
}