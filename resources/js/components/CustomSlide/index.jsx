function CustomSlide(props) {
    const {
        index,
        message,
        image,
        fullname,
        title,
        position,
        course,
        ...otherProps
    } = props;
    return (
        <div {...otherProps}>
            <div
                key={index}
                className=" px-5 m-5 sm:m-10 rounded-xl flex flex-col items-center shadow-[-10px_-10px_30px_4px_rgba(255,255,0,0.09),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
            >
                <p className=" font-montserrat pb-2 pt-10 sm:p-10 font-medium text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[0.9rem] text-justify">
                    {message}
                </p>
                <img
                    src={image}
                    alt={`Image ${index}`}
                    className="w-2/5 mx-auto rounded-md"
                />
                <p className=" text-[0.9rem] sm:p-2 sm:text-[1rem] md:text-[1rem] lg:text-[0.9rem] font-bold text-center py-2 font-montserrat">
                    {fullname}
                </p>
                <p className=" font-montserrat font-medium text-[0.8rem] sm:text-[0.9rem] text-center">
                    {title} - {position}
                </p>
                <p className="pb-5 pt-2 text-[0.9rem] sm:text-[0.9rem] text-center text-green03 font-medium">
                    {course}
                </p>
            </div>
        </div>
    );
}
export default CustomSlide;
