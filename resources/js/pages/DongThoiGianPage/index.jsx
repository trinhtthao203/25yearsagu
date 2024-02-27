import React, { useState, useEffect } from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function DongThoiGianPage() {
    return (
        <div className="w-full h-full">
            <CustomHeader />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem]">
                <p className=" text-[1.4rem] sm:text-[0.5rem] lg:text-[1.9rem] uppercase text-[#2c2c54] text-center py-10 ">
                    Trường đại học an giang qua dòng thời gian
                </p>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Secondary</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="success" />
                        </TimelineSeparator>
                        <TimelineContent>Success</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineContent>Secondary</TimelineContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="secondary" />
                        </TimelineSeparator>
                    </TimelineItem>
                </Timeline>
            </div>
            <Footer />
        </div>
    );
}

export default DongThoiGianPage;
