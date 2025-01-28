import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import InputMask from "react-input-mask";
import axios from "axios";
import { SelectChangeEvent } from "@mui/material";


interface HeaderModalProps {
  open: boolean;
  onClose: () => void;
}

export const HeaderModal: React.FC<HeaderModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    university: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    const formattedPhone = formData.phone.replace(/\D/g, "");
    const data = {
      page: "/",
      service: formData.service,
      name: formData.name,
      phone: formattedPhone,
      university: formData.university,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "https://bigozo.ru/api/submit-main-application/",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
  
      console.log("Успешно отправлено", response.data);
      setFormData({ service: "", name: "", phone: "", university: "" });
      onClose();
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Консультация
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={{ backgroundColor: "#fff", padding: "0px 5px" }}>Услуга</InputLabel>
          <Select
            name="service"
            value={formData.service}
            onChange={handleSelectChange}
          >
            <MenuItem value="Комплексные услуги">Комплексные услуги</MenuItem>
            <MenuItem value="Услуга 2">Услуга 2</MenuItem>
            <MenuItem value="Услуга 3">Услуга 3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Имя"
          name="name"
          fullWidth
          sx={{ mb: 2 }}
          value={formData.name}
          onChange={(e:any) =>handleInputChange(e)}
        />
        <InputMask
          mask="+7 (999)-999-99-99"
          value={formData.phone}
          onChange={(e:any) => setFormData({ ...formData, phone: e.target.value })}
        >
          {(inputProps) => <TextField label="Телефон" fullWidth sx={{ mb: 2 }} {...inputProps} />}
        </InputMask>
        <TextField
          label="ВУЗ"
          name="university"
          fullWidth
          sx={{ mb: 2 }}
          value={formData.university}
          onChange={(e:any) =>handleInputChange(e)}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FFDE00", color: "#1A1A1A", width: "100%", mb: 1 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Отправка..." : "Отправить"}
        </Button>
        <Button variant="outlined" sx={{ width: "100%" }} onClick={onClose}>
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};