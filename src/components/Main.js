import React, { useReducer, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Booking from './Booking';
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';

const seedRandom = function (seed) {
    let m = 2 ** 35 - 31;
    let a = 185852;
    let s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() > 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function (formData) {
    return true;
};

const Main = () => {
    const navigate = useNavigate();

    const updateTimes = useCallback((state, dte) => {
        return { availableTimes: fetchAPI(new Date()) };
    }, []);

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    const submitForm = useCallback((formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }, [navigate]);

    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route
                    path='/booking'
                    element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
                />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;
