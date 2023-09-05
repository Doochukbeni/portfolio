import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { email } = body;

  if (!email) {
    return new NextResponse("Email is required", { status: 401 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_CLIENT_EMAIL,
        pass: process.env.GOOGLE_CLIENT_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.GOOGLE_CLIENT_EMAIL, // sender address
      to: [process.env.GOOGLE_CLIENT_EMAIL, email].join(", "), // list of receivers
      replyTo: email,
      subject: `Newsletter Subscription From ${email}`, // Subject line

      html: `
         <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Subscribing</title>
  <style>
    /* Inline CSS for styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #007bff;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Thank You for Subscribing!</h1>
    <p>We're thrilled to have you as a subscriber to our newsletter. You'll now receive the latest updates, news, and exclusive content right in your inbox.</p>
    <p>If you have any questions or suggestions, feel free to reach out to us anytime. We value your feedback.</p>
    <p>Best regards,<br>Your Newsletter Team</p>
  </div>
</body>
</html>
        `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // main().catch(console.error);

    return new NextResponse("message sent successfully", { status: 200 });
  } catch (error) {
    console.log(error);

    return new NextResponse("nodemailer Api error", { status: 500 });
  }
}
