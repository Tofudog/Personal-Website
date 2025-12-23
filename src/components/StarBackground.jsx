import { useEffect, useState } from "react";

/*
    Star attributes;
        - id
        - size
        - x
        - y
        - opacity
        - animation duration
*/
const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);

        const newStars = [];

        for (let i=0; i<numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 2,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacty: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }

        setStars(newStars);
    };

    return <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacty: `${star.opacty}`,
                    animationDuration: `${star.animationDuration}s`,
                }}>

                </div>
            ))}
        </div>
    </>
};

export default StarBackground;