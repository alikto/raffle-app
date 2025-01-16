export const sendRaffleEmails = async (matches) => {
    try {
      // each match (giver, receiver)
      for (const match of matches) {
        const response = await fetch('https://raffle-app-service.onrender.com/api/emails/send-emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            recipient: match.receiver.email,
            subject: 'Your Raffle Gift Recipient',
            text: `Dear ${match.receiver.name}\nYou are giving a gift to: ${match.giver.name}.`
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
  
        const data = await response.json();
        console.log('Email sent successfully:', data);
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };
  