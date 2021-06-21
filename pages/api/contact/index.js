import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {

    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const sgEmail = {
      to: "contact@daltonp.dev",
      from: "contact@daltonp.dev",
      subject: `New portfolio contact from: ${name}, ${email}`,
      text: `${message}`,
      html: `<p>${message}</p>`,
    };

    sgMail
      .send(sgEmail)
      .then(() => {
        return res.status(200).send("sent");
      })
      .catch((error) => {
        return res.status(500).send(`Error: ${error}`);
      });
  } else {
    res.send("hello :)");
  }
}
