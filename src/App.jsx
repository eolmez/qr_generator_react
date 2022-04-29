// Installs
import QRCode from "qrcode";
import { useState } from "react";

const App = () => {
  //States
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  //Functions
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        // errorCorrectionLevel: 'H',
        width: 800,
        margin: 2,
        color: {
          dark: "#0000ff00",
        },
      },
      (err, url) => {
        if (err) return console.log(err);

        console.log(url);
        setQrCode(url);
      }
    );
  };
  return (
    <div className="App">
        <h1>QR Code Generator</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="e.g. webadress.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
      </div>
      {qrCode && (
        <>
          <img src={qrCode} alt="QR" />
          <a href={qrCode} download="qrcode.jpg">
            Download
          </a>
        </>
      )}
    </div>
  );
};

export default App;
