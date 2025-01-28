import { Box, Typography, Container, Select, MenuItem, TextField, Button, FormControl, InputLabel } from "@mui/material";
import InputMask from "react-input-mask";
import { Icons } from "../Icons";

export default function Hero() {
  const { Like, Medal, Star, Arrow } = Icons;
  const features = [
    { text: "Опыт 15+ лет", icon: <Medal /> },
    { text: "2000+ довольных клиентов", icon: <Like /> },
    { text: "Рейтинг 4,98", icon: <Star /> }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        position: "relative",
        height: "70vh",
        backgroundImage: "url('/girl.png')",
        backgroundSize: "60%",
        backgroundPosition: "right bottom",
        backgroundColor: '#F3F3F3',
        backgroundRepeat: 'no-repeat',
        borderRadius: '35px',
        marginTop: '8%',
        padding: "3%",
      }}
    >
      <Container sx={{height: 'inherit'}}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between", gap: 4, height: "100%" }}>
          <Box sx={{ display: "flex", gap: 4 }}>
            {features.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#FFDE00",
                  borderRadius: "100px",
                  padding: "2px 10px"
                }}
              >
                {item.icon}
                <Typography variant="subtitle1" sx={{ color: "#1A1A1A" ,fontSize: '14px'}}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: "left", color: "#1A1A1A" }}>
            <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: { xs: "32px", md: "48px" ,whiteSpace: "pre-line" }, marginBottom: '40px'}}>
              Помощь студентам{"\n"}в учебе
            </Typography>
            <Typography variant="h6" sx={{fontWeight: "light", fontSize: { xs: "16px", md: "18px" ,whiteSpace: "pre-line" }}}>
              Персональный менеджер — 0 р. Техническая{"\n"}поддержка 24/7. Каждая услуга «под ключ».
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",

            }}
          >
            <FormControl sx={{ flex: 1 }} fullWidth>
              <InputLabel sx={{backgroundColor: '#fff'}}>Что вас интересует?</InputLabel>
              <Select defaultValue="" sx={{backgroundColor: '#fff', borderRadius: '8px',paddingRight: '10px'}} IconComponent={Arrow}>
                <MenuItem value="service1">Услуга 1</MenuItem>
                <MenuItem value="service2">Услуга 2</MenuItem>
                <MenuItem value="service3">Услуга 3</MenuItem>
              </Select>
            </FormControl>

            <InputMask mask="+7 (999)-999-99-99">
              {(inputProps) => <TextField label="Номер телефона" fullWidth sx={{ flex: 1, backgroundColor: '#fff',borderRadius: '8px' }} {...inputProps} />}
            </InputMask>

            <TextField label="E-mail" fullWidth sx={{ flex: 1, backgroundColor: '#fff',borderRadius: '8px' }} />

            <Button variant="contained" sx={{ flex: 1, backgroundColor: "#FFDE00", color: "#1A1A1A",borderRadius: '8px' }} fullWidth>
              Заказать звонок
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}