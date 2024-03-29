import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try{
    const { name, email, message } = await req.json();
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "krishnawankhede40@gmail.com",
        pass: "umay goke tgko eldh",
      },
    });
    
    const mailOption = {
      from: "next@gmail.com",
      to: "krishnawankhede40@gmail.com",
      subject: `Contact form Message from ${name}`,
      html:`
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Message sent successfully" },
    {status: 200});

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to send message" },
    {status: 500});
  }
}
