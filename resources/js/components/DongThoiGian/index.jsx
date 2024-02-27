import React from "react";
import { Link } from "react-router-dom";

function DongThoiGian() {
    return (
        <div className="flex flex-col justify-center items-center py-[5rem] bg-[#dff9fb]">
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                Ngược dòng thời gian
            </p>
            <p className=" max-w-[49rem] text-justify text-[1.2rem] mt-4 px-10">
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
                <a className="text-[#227093]">Đọc thêm...</a>
            </p>
            <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                <Link to="/lich-su-hinh-thanh">Khám phá</Link>
            </button>
        </div>
    );
}

export default DongThoiGian;
