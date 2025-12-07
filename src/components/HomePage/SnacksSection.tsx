import { Paper, Typography, Box } from "@mui/material";
import { useDiet } from "../../context/DietContext";

const BreakfastSection: React.FC = () => {
    const { state } = useDiet();
    const items = state.snacks?.items || [];

    return (
        <Paper
            sx={{p: 2, mb: 2, background: "transparent", boxShadow:"none" ,  minHeight:'100vh' , display:'flex' , alignItems:'center'}}>

            <div className="flex w-full justify-between itmes-center gap-10">

                <Box sx={{lineHeight: 1.8 , flexGrow: 1 , display: 'flex', flexDirection:'column', gap:'16px' , justifyContent:'space-between'}}>
                    <Typography variant="h2" textAlign="center"  className="text-white !font-black" mb={1}>
                        میان‌وعده هپی‌ریتم
                    </Typography>
                    {items.map((item:string, i:number) => (
                        <div style={{
                            padding: "10px",
                            borderRadius: "20px",
                            background: "rgba(255,255,255,0.1)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",

                            border: "1px solid rgba(255,255,255,0.4)",
                            boxShadow: `
                                                inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
                                                inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.1),
                                                0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
                                                0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.1)
                                                `,
                            transition: "all 0.3s ease",
                            color:"#fff",
                        }}>
                            <Typography className=" !text-2xl "  key={i}> {item}</Typography>
                        </div>
                    ))}
                </Box>
                <img className='w-[500px]' src="../../../public/assets/image/ChatGPT%20Image%20Nov%2010,%202025,%2010_27_04%20AM.png" alt=""/>
            </div>
        </Paper>
    );
};

export default BreakfastSection;
