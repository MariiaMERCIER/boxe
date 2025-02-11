import { NextResponse } from "next/server";
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

export interface ContactForm {
  email: string;
  name: string;
  message: string;
  phone: string;
}

const apiInstance = new TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY || "api-key";

export async function POST(request: Request) {
  const { email, name, message, phone }: ContactForm = await request.json();

  if (!email || !name || !message) {
    return NextResponse.json(
      { error: "Email et message requis" },
      { status: 400 }
    );
  }
  const sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.sender = {
    email: "ascm.noreply@gmail.com",
  };
  sendSmtpEmail.to = [{ email: email, name: name }];
  sendSmtpEmail.subject = "Confirmation de votre demande de contact";
  sendSmtpEmail.htmlContent = `<p>Bonjour, ${name}!</p><p>Merci pour votre message. Nous avons bien pris en compte votre demande et notre équipe reviendra vers vous dans les plus brefs délais afin de vous apporter une réponse complète. <br/>Récapitulatif: <br/> Name: <b>${name}</b>. <br/>Email: <b>${email}</b>. <br/>Message: <b>${message}</b>. </p>`;

  try {
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail, {
      headers: { "api-key": apiKey },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Échec de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
