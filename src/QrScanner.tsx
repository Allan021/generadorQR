import { Container, Typography } from "@mui/material";
import { useStyles } from "./styles/Qr";

const QrScanner = () => {
  return (
    <Container>
      <Typography variant="h4" color="initial">
        Generar descargas y escanear codigos QR con React Js
      </Typography>
    </Container>
  );
};

export default QrScanner;
