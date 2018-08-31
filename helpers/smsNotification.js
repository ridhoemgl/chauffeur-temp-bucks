const Nexmo = require('nexmo')

function smsNotification(customerName){

        const nexmo = new Nexmo({
            apiKey: '4499451f',
            apiSecret: 'HJtsEQRaZQwR3tjh'
        })

        let from = 'Nexmo';
        let numbers = ['6282298157376', '628121105697']
        let random = Math.floor((Math.random() * 2));
        let to = numbers[random]
        let text = `Hello ${customerName}, Your request has been approved by the Driver`; 
        
        nexmo.message.sendSms(from, to, text, (error, response) => {
        if(error) {
            return error;
        } else if(response.messages[0].status != '0') {
            return 'Nexmo returned back a non-zero status';
        } else {
            return response;
        }
     });
}
module.exports = smsNotification