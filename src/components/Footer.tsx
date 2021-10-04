import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState<string>("en");
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);

    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <Box display="flex" justifyContent="center" marginTop={3}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {t("QR_inputs.selectLabel")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={lang}
          onChange={handleChange}
          autoWidth
          label={t("QR_inputs.selectLabel")}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"es"}>Español</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
