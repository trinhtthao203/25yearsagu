import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ link }) => {
    return (
        <Link
            to={link}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Back
        </Link>
    );
};

export default BackButton;
