import { Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import { GenerarQRTexto } from "./components/GenerarQRTexto";
import { LeerQrImagen } from "./components/LeerQrImagen";
import LeerQrWebCam from "./components/LeerQrWebCam";
import { Footer } from "./components/Footer";

const QrScanner = () => {
  const [t] = useTranslation("global");

  return (
    <Container style={{ maxWidth: "90%" }}>
      <Typography
        variant="h4"
        color="initial"
        style={{
          backgroundColor: "#3f50b5",
          textAlign: "center",
          color: "white",
          padding: ".5rem 0",
        }}
      >
        {t("QR_section.QrTitle")}
      </Typography>
      <Grid container spacing={2}>
        <GenerarQRTexto />
        <LeerQrImagen />
        <LeerQrWebCam />
      </Grid>
      <Footer />
    </Container>
  );
};

export default QrScanner;
