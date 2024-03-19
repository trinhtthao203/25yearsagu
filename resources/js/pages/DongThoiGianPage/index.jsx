import * as React from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "../../components/Tabs";
import { Reveal } from "../../motion/Reveal";
import BackButton from "../../components/BackButton";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Stepper, Step, StepButton, Button, Box } from "@mui/material";

export default function DongThoiGianPage() {
    const { t } = useTranslation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const timeData = [
        {
            id: 1,
            description: t("time.gd1"),
            time: t("time.time-gd1"),
            events: [
                {
                    description: t("time.gd1-event-1"),
                    time: t("time.time-gd1-event-1"),
                },
                {
                    description: t("time.gd1-event-2"),
                    time: t("time.time-gd1-event-2"),
                },
                {
                    description: t("time.gd1-event-3"),
                    time: t("time.time-gd1-event-3"),
                },
                {
                    description: t("time.gd1-event-4"),
                    time: t("time.time-gd1-event-4"),
                },
                {
                    description: t("time.gd1-event-5"),
                    time: t("time.time-gd1-event-5"),
                },
                {
                    description: t("time.gd1-event-6"),
                    time: t("time.time-gd1-event-6"),
                },
            ],
            color: "#18B6B4",
            textColor: "text-[#18B6B4]",
        },
        {
            id: 2,
            description: t("time.gd2"),
            time: t("time.time-gd2"),
            events: [
                {
                    description: t("time.gd2-event-1"),
                    time: t("time.time-gd2-event-1"),
                },
                {
                    description: t("time.gd2-event-2"),
                    time: t("time.time-gd2-event-2"),
                },
                {
                    description: t("time.gd2-event-3"),
                    time: t("time.time-gd2-event-3"),
                },
                {
                    description: t("time.gd2-event-4"),
                    time: t("time.time-gd2-event-4"),
                },
                {
                    description: t("time.gd2-event-5"),
                    time: t("time.time-gd2-event-5"),
                },
                {
                    description: t("time.gd2-event-6"),
                    time: t("time.time-gd2-event-6"),
                },
                {
                    description: t("time.gd2-event-7"),
                    time: t("time.time-gd2-event-7"),
                },
                {
                    description: t("time.gd2-event-8"),
                    time: t("time.time-gd2-event-8"),
                },
                {
                    description: t("time.gd2-event-9"),
                    time: t("time.time-gd2-event-9"),
                },
                {
                    description: t("time.gd2-event-10"),
                    time: t("time.time-gd2-event-10"),
                },
                {
                    description: t("time.gd2-event-11"),
                    time: t("time.time-gd2-event-11"),
                },
                {
                    description: t("time.gd2-event-12"),
                    time: t("time.time-gd2-event-12"),
                },
                {
                    description: t("time.gd2-event-13"),
                    time: t("time.time-gd2-event-13"),
                },
                {
                    description: t("time.gd2-event-14"),
                    time: t("time.time-gd2-event-14"),
                },
                {
                    description: t("time.gd2-event-15"),
                    time: t("time.time-gd2-event-15"),
                },
                {
                    description: t("time.gd2-event-16"),
                    time: t("time.time-gd2-event-16"),
                },
                {
                    description: t("time.gd2-event-17"),
                    time: t("time.time-gd2-event-17"),
                },
                {
                    description: t("time.gd2-event-18"),
                    time: t("time.time-gd2-event-18"),
                },
                {
                    description: t("time.gd2-event-19"),
                    time: t("time.time-gd2-event-19"),
                },
                {
                    description: t("time.gd2-event-20"),
                    time: t("time.time-gd2-event-20"),
                },
            ],
            color: "#2C92D5",
            textColor: "text-[#2C92D5]",
        },
        {
            id: 3,
            description: t("time.gd3"),
            time: t("time.time-gd3"),
            events: [
                {
                    description: t("time.gd3-event-1"),
                    time: t("time.time-gd3-event-1"),
                },
                {
                    description: t("time.gd3-event-2"),
                    time: t("time.time-gd3-event-2"),
                },
            ],
            color: "#13538A",
            textColor: "text-[#13538A]",
        },
    ];

    const [activeStep, setActiveStep] = React.useState(parseInt(id - 1));
    const [completed, setCompleted] = React.useState({});
    const totalSteps = () => {
        return timeData.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? timeData.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <CustomHeader />
            <BackButton title={t("common.back-home")} />
            <Reveal>
                <p className="text-3xl uppercase text-darkblue text-center px-2 py-10">
                    {t("home.time-line")}
                </p>
            </Reveal>
            <Box sx={{ margin: { xs: "20px", sm: "0px 100px 100px 100px" } }}>
                <Reveal>
                    <Stepper
                        nonLinear
                        activeStep={activeStep}
                        sx={{
                            flexDirection: { xs: "column", sm: "row" },
                            height: "100px",
                            justifyContent: { xs: "flex-start", sm: "center" },
                            alignItems: { xs: "flex-start", sm: "center" },
                        }}
                    >
                        {timeData.map((time, index) => (
                            <Step
                                key={time}
                                completed={completed[index]}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor:
                                        activeStep === time.id - 1
                                            ? "#ecf0f1"
                                            : "white",
                                    height: "2rem",
                                    borderRadius: "7px",
                                }}
                            >
                                <Reveal>
                                    <StepButton
                                        color="inherit"
                                        onClick={handleStep(index)}
                                    >
                                        <span
                                            className={`text-[1.1rem] ${time.textColor}`}
                                        >
                                            {time.description}
                                            {time.time}
                                        </span>
                                    </StepButton>
                                </Reveal>
                            </Step>
                        ))}
                    </Stepper>
                </Reveal>
                <div>
                    <React.Fragment>
                        <Reveal>
                            <Box sx={{ width: "100%" }}>
                                <Tabs eventData={timeData[activeStep].events} />
                            </Box>
                        </Reveal>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Reveal>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    {t("common.previous")}
                                </Button>
                            </Reveal>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Reveal>
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    {t("common.next")}
                                </Button>
                            </Reveal>
                        </Box>
                    </React.Fragment>
                </div>
            </Box>
            <Footer />
        </Box>
    );
}
