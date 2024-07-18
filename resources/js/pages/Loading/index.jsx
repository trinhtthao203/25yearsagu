import React from "react";
import Lottie from "react-lottie";
import loadingData from "../../../../public/images/loading.json";
function LoadingScreen() {
    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="h-screen w-full flex justify-center items-center relative">
            <Lottie options={loadingOptions} height={300} width={300} />
            <p className=" animate-fade-up absolute text-7xl font-meri bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
                25
            </p>
        </div>
    );
}

export default LoadingScreen;
