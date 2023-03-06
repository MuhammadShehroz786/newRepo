import express from "express";
const router = express.Router();
import {
  AddBooking,
  getALLBookings,
} from "../controllers/BookingControllers.js";
router.post('/',(req,res)=>{
  res.send('hello Server')
})
router.post(
  "/AddReviews",

  AddBooking
);
router.get(
  "/getReviews",

  getALLBookings
);

export default router;
