import React, { useEffect, useState } from 'react';
import DateGroups from './DateGroups';
import { DATE_TARGET } from '../../config/config';

const Countdown = () => {



    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

    function updateCountdown(DATE_TARGET) {

        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

        return DURATION > 0 ? {
            REMAINING_DAYS,
            REMAINING_HOURS,
            REMAINING_MINUTES,
            REMAINING_SECONDS
        } : {
            REMAINING_DAYS: 0,
            REMAINING_HOURS: 0,
            REMAINING_MINUTES: 0,
            REMAINING_SECONDS: 0
        }
    }

    const [counter, setCounter] = useState(updateCountdown(DATE_TARGET));

    useEffect(() => {
        const interval = setInterval(() => { setCounter(updateCountdown(DATE_TARGET)) }, MILLISECONDS_OF_A_SECOND);
        if (
            counter.REMAINING_DAYS == 0 &&
            counter.REMAINING_HOURS == 0 &&
            counter.REMAINING_MINUTES == 0 &&
            counter.REMAINING_SECONDS == 0
        ) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <>

            <DateGroups positions={[{ left: 75, top: 941 }, { left: 162, top: 941 }]}>{counter.REMAINING_DAYS}</DateGroups>
            <DateGroups positions={[{ left: 279, top: 941 }, { left: 365, top: 941 }]}>{counter.REMAINING_HOURS}</DateGroups>
            <DateGroups positions={[{ left: 75, top: 1058 }, { left: 162, top: 1058 }]}>{counter.REMAINING_MINUTES}</DateGroups>
            <DateGroups positions={[{ left: 279, top: 1058 }, { left: 365, top: 1058 }]}>{counter.REMAINING_SECONDS}</DateGroups>

        </>
    )
}

export default Countdown