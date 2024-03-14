import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleChange = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({
            date: date,
            times: times,
            guests: guests,
            occasion: occasion,
        });

        const bookingSuccessful = true; // Change this based on your logic
        setBookingSuccess(bookingSuccessful);
    }




    return (
        <header>
            <section>
                {/* Conditional rendering based on bookingSuccess state */}
                {bookingSuccess ? (
                    <div>
                        <p>Booking successful! Thank you for choosing us.</p>
                        {/* Additional content or redirection logic can go here */}
                    </div>
                ) : (

                    <form onSubmit={handleSubmit} action="">
                        <fieldset>
                            {/* For date selection */}
                            <div>
                                <label htmlFor="book-date">Choose Date</label>
                                <input
                                    id='book-date'
                                    value={date}
                                    onChange={handleChange}
                                    type="date"
                                    required
                                />
                            </div>
                            {/* For time selection */}
                            <div>
                                <label htmlFor="book-time">Choose Time</label>
                                <select
                                    id="book-time"
                                    value={times}
                                    onChange={(e) => setTimes(e.target.value)}
                                >
                                    {props.availableTimes &&
                                        props.availableTimes.availableTimes &&
                                        props.availableTimes.availableTimes.map((availableTime) => (
                                            <option 
                                            key={availableTime} value={availableTime}>
                                            {availableTime}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* For Number of guests selection */}
                            <div>
                                <label htmlFor="book-guests">Number of Guests: </label>
                                <input
                                    id='book-guests'
                                    min='1'
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    type="text"
                                />
                            </div>
                            {/* Occasion field */}
                            <div>
                                <label htmlFor="book-occasion">Occasion</label>
                                <select
                                    name=""
                                    id="book-occasion"
                                    key={occasion}
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                >
                                    <option value="">Select an Occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                </select>
                            </div>
                            {/* submit button */}
                            <div className='btnReceive'>
                                <input aria-label='On Click' type="submit" value={"Make your Reservation"} />
                            </div>
                        </fieldset>
                    </form>
                )}
            </section>
        </header>
    );
};

export default BookingForm;
