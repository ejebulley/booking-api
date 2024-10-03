import { booking } from "../models/booking-model.js";

export const getAllBookings = (req, res) => {
    res.status(200).json("These are all booking");
};

export const getOneBooking = async (req, res, next) => {
    try {
        // const newBooking = new booking();
        // const bookings = await newBooking.f();
        res.status(200).json(bookings);
    } catch (error) {
        next(error);
    }
};

export const postBooking = async (req, res, next) => {
    try {
        const newBooking = new booking(req.body);
        const bookings = await newBooking.save();
        res.status(201).json(bookings);
    } catch (error) {
        next(error);
    }
};

export const updateBooking = (req, res) => {
    res.status(200).json("update booking");
}

export const deleteBooking = (req, res) => {
    res.status(200).json("delete booking");
};
