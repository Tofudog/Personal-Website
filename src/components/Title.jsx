import { useEffect, useState } from "react";
import topBackground from "./../assets/lion-image-moon.png";

const Title = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div>
                {screenWidth > 1000 && (
                    <div className="sky">
                        <div className="moon" />
                    </div>
                )}
            </div>
            <br></br><br></br>
            <div style={{
                backgroundImage: `url(${topBackground})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",

                height: "clamp(300px, 70vw, 725px)",
                width: "clamp(300px, 70vw, 725px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                padding: "clamp(0.75rem, 3vw, 1.5rem)",

                position: "relative", // container must be relative
                overflow: "hidden"
            }}>
                <h1 className="title">
                    Leonardo de Farias
                </h1>

                <h2 className="subtitle">
                    CS Student @ Emory, Aspiring Front End Developer
                </h2>
            </div>
            <hr className="my-4 border-t-4 border-gray-300" />
        </>
    );
};

export default Title;
