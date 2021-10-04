import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import QrReader from "react-qr-reader";

const LeerQrWebCam = () => {
  const [codeWebCam, setCodeWebCam] = useState<string>("");
  const [t] = useTranslation("global");
  const webCamComponent = useRef<QrReader>(null);
  const handleError = () => {};
  const handleScanFile = (data: string | null) => {
    if (data) {
      setCodeWebCam(data);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box display="flex" paddingY={2} flexDirection="column">
        {" "}
        <Typography variant="h6" color="initial" style={{ marginTop: 2 }}>
          {t("QR_section.QrTitleWebCam")}
        </Typography>
        <QrReader
          ref={webCamComponent}
          onError={handleError}
          onScan={handleScanFile}
          delay={400}
          style={{ width: "100%", marginTop: 2 }}
        />
        {codeWebCam && (
          <Typography variant="body1" color="initial" style={{ marginTop: 2 }}>
            <b>{t("QR_section.QrcodeWebCam")}:</b>
          </Typography>
        )}
      </Box>
    </Grid>
  );
};

export default LeerQrWebCam;
