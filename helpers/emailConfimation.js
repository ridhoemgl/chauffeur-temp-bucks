function emailConfirmation(firstName, lastName, email){
    const mailOptions = {
        from: 'ridhotass@gmail.com',
        to: `${email}`,
        subject: 'You get an approval request from Chauffeur Temp Bucks',
        html: `<p> Hello Driver ${firstName} ${lastName} Please reply to this message for approval that you accept being his driver </p>`
    };
    return mailOptions
}
module.exports = emailConfirmation