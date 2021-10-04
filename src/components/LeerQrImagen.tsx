import { Grid, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import QrReader from "react-qr-reader";

export const LeerQrImagen = () => {
  //debo hacer una referencia del Qr para poder Renderizarla en el dom ya que es un componente
  const [t] = useTranslation("global");

  const [codeRead, setCodeRead] = useState<string>("");

  //esto es para abrir el cuadro de dialogo
  const ReaderComponent = useRef<QrReader>(null);
  const handleReaderFile = () => {
    ReaderComponent.current?.openImageDialog();
  };

  const handleScanFile = (response: string | null) => {
    try {
      //si hay una respuesta o lo escaneo
      if (response) {
        setCodeRead(response);
      }
    } catch (error) {
      console.log(error);
    }
  }; ///este va a escanear el archivo

  const handleError = () => {};

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box display="flex" paddingY={2} flexDirection="column">
        <Button
          variant="contained"
          color="secondary"
          style={{ fontSize: 14 }}
          onClick={handleReaderFile}
        >
          {t("QR_inputs.btnCan")}
        </Button>

        <QrReader
          ref={ReaderComponent}
          onError={handleError}
          onScan={handleScanFile}
          delay={400}
          legacyMode
          style={{ width: "100%", marginTop: 2 }}
        />

        {codeRead && (
          <Typography variant="body1" color="initial" style={{ marginTop: 2 }}>
            <b>{t("QR_section.QrcodeText")}</b> {codeRead}
          </Typography>
        )}
      </Box>
    </Grid>
  );
};
