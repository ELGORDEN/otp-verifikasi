export default async function handler(req, res) {
  const { phoneNumber, otp } = req.body;

  const response = await fetch("https://console.wablas.com/api/send-message", {
    method: "POST",
    headers: {
      Authorization: "YOUR_WABLAS_TOKEN",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      phone: phoneNumber,
      message: `Kode OTP Anda: ${otp}`,
      secret: false,
      priority: true
    })
  });

  const data = await response.json();
  res.status(200).json({ status: "sent", detail: data });
}
