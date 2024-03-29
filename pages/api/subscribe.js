import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER // e.g. us1
});

export default async (req, res) => {
  const { email, MMERGE6, MMERGE2 } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Preencha com seu e-mail para enviar.' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      merge_fields: {
        MMERGE6: MMERGE6,
        MMERGE2: MMERGE2
      },
      tags: ["pag-incricao-semente-01"],
      status: 'subscribed'
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error || error.toString() });
  }
};