import { Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Qrcode from "qrcode";
import { useTranslation } from "react-i18next";

export const GenerarQRTexto = () => {
  const [t] = useTranslation("global");

  const [qrSearch, setQrSearch] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const handleInputShange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrSearch(event.target.value);
  };
  const handleGenerateQr = async () => {
    try {
      if (qrSearch.trim() !== "") {
        const respose = await Qrcode.toDataURL(qrSearch);

        setUrl(respose);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
      <Box display="flex" justifyContent="space-evenly" paddingY={2}>
        <TextField
          id="url"
          label={t("QR_inputs.TextField")}
          value={qrSearch}
          onChange={handleInputShange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: 14 }}
          onClick={handleGenerateQr}
        >
          {t("QR_inputs.btnGenerate")}
        </Button>
      </Box>

      {url && (
        <a href={url} download>
          {" "}
          <img src={url} alt="Imageb qr" />
        </a>
      )}
    </Grid>
  );
};
