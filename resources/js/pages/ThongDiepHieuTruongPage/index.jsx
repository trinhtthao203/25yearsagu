import React, { useState, useEffect } from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Reveal } from "../../components/Reveal";
import BackButton from "../../components/BackButton";

function ThongDiepHieuTruongPage() {
    return (
        <div className="w-full h-full">
            {/* <CustomHeader /> */}
            <BackButton link={"/"} />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <Reveal>
                    <p className=" text-[1.4rem] sm:text-[0.5rem] lg:text-[1.9rem] uppercase text-[#2c2c54] text-center py-10 ">
                        Thông điệp hiệu trưởng
                    </p>
                </Reveal>
                <Reveal>
                    <p className=" max-w-[49rem] text-[0.9rem] sm:text-[0.5rem] lg:text-[1.2rem] text-justify  my-5 mx-[5rem] text-[#2C3A47]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet sit corporis, eligendi, temporibus nisi sapiente
                        dolorum eius vero, sequi dolore minus quae ipsam!
                        Praesentium aspernatur minima eligendi ut accusantium
                        laudantium. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Tempore iste aperiam officia vero
                        provident laudantium nobis dicta molestiae obcaecati
                        officiis minima ullam sit doloribus esse? Exercitationem
                        repudiandae placeat alias? Maxime, explicabo? Ullam
                        veritatis dicta aspernatur deserunt libero placeat
                        fugiat laborum? Aliquid, deserunt quos repellat sunt
                        nemo velit repellendus. Iste temporibus provident dolore
                        nobis repudiandae blanditiis alias beatae pariatur, ipsa
                        odit ad, praesentium tempore! Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Enim maiores iste
                        numquam veritatis minima amet, odit, saepe molestiae
                        sunt perferendis, magnam magni nihil. Ipsam, ea sapiente
                        eveniet iste distinctio aperiam eligendi nisi blanditiis
                        totam repellat quae dolore natus! Facilis vitae at natus
                        voluptatibus id, doloribus molestias nobis molestiae ea
                        et accusamus eveniet explicabo enim rerum. Quam facilis
                        magni inventore praesentium, recusandae corrupti in et
                        incidunt eius ipsa iure? Facilis eos ut distinctio
                        dolorum eaque labore neque voluptatibus reprehenderit
                        impedit error at, quas numquam expedita atque magnam!
                        Assumenda dolores iusto nihil, eius repellendus tempore
                        iste veritatis esse impedit cum est. Blanditiis
                    </p>
                </Reveal>
                <Reveal>
                    <img src={`${HieuTruong}`} className="  w-[10rem]" />
                </Reveal>
                <Reveal>
                    <p className=" max-w-[49rem] text-[0.9rem] sm:text-[0.5rem] lg:text-[1.2rem] text-justify  my-5 mx-[5rem] text-[#2C3A47]">
                        vitae ullam porro quae amet libero laborum numquam
                        provident deleniti. Laborum voluptate laboriosam optio
                        similique nobis, inventore nemo quidem doloremque
                        temporibus, ratione pariatur aspernatur nulla nesciunt
                        dignissimos facere! Assumenda sed et magni
                        exercitationem itaque aut perspiciatis accusamus nemo
                        rerum culpa! Saepe voluptas soluta asperiores ducimus
                        amet voluptatem, sunt ipsam ea incidunt cumque
                        consequatur. Tenetur nemo cumque, amet illo et animi
                        dignissimos omnis, magni error officia molestiae ipsam
                        fuga dicta ea rem corrupti pariatur perspiciatis odit
                        nisi consequatur necessitatibus perferendis neque. Velit
                        autem quidem aliquid. Asperiores vitae adipisci eaque
                        fuga aut maxime, quos quidem sit totam et explicabo
                        itaque excepturi harum.
                    </p>
                </Reveal>
                <Reveal>
                    <img
                        src={`${HieuTruong}`}
                        className=" rounded-[10rem] border-solid border-[0.5rem] border-[#f7f1e3] w-[10rem]"
                    />
                </Reveal>
            </div>
            <Footer />
        </div>
    );
}

export default ThongDiepHieuTruongPage;
