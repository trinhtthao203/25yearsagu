import React from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import { Link } from "react-router-dom";
function ThongDiepHieuTruong() {
    return (
        <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem]">
            <p className=" text-[1.4rem] sm:text-[0.5rem] lg:text-[1.9rem] uppercase text-[#2c2c54] text-center ">
                Thông điệp hiệu trưởng
            </p>
            <p className=" max-w-[49rem] text-[0.9rem] sm:text-[0.5rem] lg:text-[1.2rem] text-justify  my-5 mx-[5rem] text-[#2C3A47]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                sit corporis, eligendi, temporibus nisi sapiente dolorum eius
                vero, sequi dolore minus quae ipsam! Praesentium aspernatur
                minima eligendi ut accusantium laudantium. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Tempore iste aperiam officia
                vero provident laudantium nobis dicta molestiae obcaecati
                officiis minima ullam sit doloribus esse? Exercitationem
                repudiandae placeat alias? Maxime, explicabo? Ullam veritatis
                dicta aspernatur deserunt libero placeat fugiat laborum?
                Aliquid, deserunt quos repellat sunt nemo velit repellendus.
                Iste temporibus provident dolore nobis repudiandae blanditiis
                alias beatae pariatur, ipsa odit ad, praesentium tempore!{" "}
                <Link to="/thong-diep-hieu-truong" className="text-[#227093]">
                    Đọc thêm...
                </Link>
            </p>
            <img
                src={`${HieuTruong}`}
                className=" rounded-[10rem] border-solid border-[0.5rem] border-[#f7f1e3] w-[10rem]"
            />
            <p className="text-[1.2rem] text-[#2C3A47">PGS, TS Võ Văn Thắng</p>
            <p className="text-[#2C3A47">Hiệu trưởng</p>
        </div>
    );
}

export default ThongDiepHieuTruong;
