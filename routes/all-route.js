import { Router } from "express";
import { deleteBooking, getAllBookings, getOneBooking, postBooking, updateBooking } from "../controllers/booking-controllers.js";

export const bookingRouter = Router();

bookingRouter.get("/bookings", getAllBookings);

bookingRouter.get("/onebookings", getOneBooking);

bookingRouter.post("/postbookings", postBooking);

bookingRouter.patch("/updatebooking", updateBooking);

bookingRouter.delete("/deletebooking", deleteBooking)


// export default bookingRouter;


