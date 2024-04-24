import { useEffect, useState } from "react";

export default function CustomFab() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight;
            setIsAtBottom(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleButtonClick = () => {
        if (isAtBottom) {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // Scroll to bottom
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-20">
            <button
                onClick={handleButtonClick}
                className=" bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
            >
                {isAtBottom ? (
                    // Scroll to top icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-chevron-double-up w-6 h-6 text-gray-500"
                        viewBox="0 0 16 16"
                        strokeWidth="1.5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                        />
                    </svg>
                ) : (
                    // Scroll to bottom icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-chevron-double-up w-6 h-6 text-gray-500"
                        viewBox="0 0 16 16"
                        strokeWidth="1.5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
