import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds

function InactivityDetector({ children }){

    const navigate = useNavigate();
    const timerRef = useRef(null);

    const resetTimer = () => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            handleInactivity();
        }, INACTIVITY_TIMEOUT);
    };

    const handleInactivity = () => {
        // Perform your action here (e.g., log out the user, show a warning, etc.)
        alert('Session timeout');
        navigate('/UserLogin');
    }

    useEffect(()=>{
        const events = ['mousemove', 'keydown', 'scroll', 'touchstart'];
        const eventHandler = () => resetTimer();

        events.forEach(event => {
            window.addEventListener(event, eventHandler);
        });

        resetTimer(); // Initialize the timer on component mount

        return ()=>{
            events.forEach(event => {
                window.removeEventListener(event, eventHandler);
            });
            if(timerRef.current)
                clearTimeout(timerRef.current)
        }
    },[]);
    
    return(
        <>{children}</>
    )
}

export default InactivityDetector;