import React, { useRef } from "react";
import { useDiet } from "../../context/DietContext";
import { Box, Paper, Typography } from "@mui/material";

const HomePage: React.FC = () => {
    const { state } = useDiet();
    const patient = state.patient;
    const pageRef = useRef<HTMLDivElement>(null);

    if (!patient) {
        return (
            <Box
                sx={{
                    p: 4,
                    textAlign: "center",
                    fontFamily: "Vazirmatn, sans-serif",
                    direction: "rtl",
                }}
            >
                <Typography>اطلاعات هنوز وارد نشده</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                fontFamily: "Vazirmatn, sans-serif",
                direction: "rtl",
                minHeight: "100vh",
                py: 6,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div ref={pageRef} style={{ position: "relative" }}>
                {/* --- عنوان رژیم --- */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        boxShadow: `
                            inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                            inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.1),
                            0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                            0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.1)
                        `,
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        flex: 1,
                    }}
                    className="flex justify-between w-[52%] items-center gap-2"
                >
                    <Typography variant="h4" color="#fff" fontWeight="bold">
                        برنامه رژیم چربی‌سوز: {patient.name}
                    </Typography>
                    <div>
                        <img
                            className="w-[100px]"
                            src="../../../public/assets/image/3b7d7948-aa9e-4af2-b143-2ca30ee79ccf.png"
                            alt=""
                        />
                    </div>
                </Paper>

                {/* --- مشخصات بدنی --- */}
                <div className="grid grid-cols-2 gap-20 items-center">
                    <div>
                        <img
                            className="w-[500px]"
                            src="../../../public/assets/image/0d8baeb6-0a34-46c5-87c0-c16d39230fdc.png"
                            alt=""
                        />
                    </div>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 8,
                            borderRadius: "20px",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.4)",
                            boxShadow: `
                                inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                                inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
                                0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                                0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2)
                            `,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            flex: 1,
                        }}
                    >
                        <Box className="grid grid-cols-2 gap-6 text-white text-start">
                            <Typography className="!text-xl">
                                وزن: <span className="font-bold">{patient.weight} kg</span>
                            </Typography>

                            <Typography className="!text-xl">
                                اختلاف با وزن ایده‌آل:{" "}
                                <span className="font-bold">{patient.idealWeightDiff}</span>
                            </Typography>

                            <Typography className="!text-xl">
                                قد: <span className="font-bold">{patient.height} cm</span>
                            </Typography>

                            <Typography className="!text-xl">
                                درصد چربی بدن:{" "}
                                <span className="font-bold">{patient.bodyFatPercent}%</span>
                            </Typography>

                            <Typography className="!text-xl">
                                لگن: <span className="font-bold">{patient.waist} cm</span>
                            </Typography>

                            <Typography className="!text-xl">
                                نوع استخوان‌بندی:{" "}
                                <span className="font-bold">{patient.skeletonType}</span>
                            </Typography>

                            <Typography className="!text-xl">
                                شکم: <span className="font-bold">{patient.abdomen} cm</span>
                            </Typography>

                            <Typography className="!text-xl">
                                فعالیت بدنی:{" "}
                                <span className="font-bold">{patient.activityLevel}</span>
                            </Typography>

                            <Typography className="!text-xl">
                                بازو: <span className="font-bold">{patient.arm} cm</span>
                            </Typography>

                            <Typography className="!text-xl">
                                وضعیت توده چربی:{" "}
                                <span className="font-bold">{patient.fatStatus}</span>
                            </Typography>

                            <Typography className="!text-xl">
                                گردن: <span className="font-bold">{patient.neck} cm</span>
                            </Typography>

                            <Typography className="!text-xl">
                                BMI: <span className="font-bold">{patient.bmi}</span>
                            </Typography>
                        </Box>
                    </Paper>
                </div>
            </div>
        </Box>
    );
};

export default HomePage;
