interface IEmailParams {
    email: string;
    message: string;
}

export const sendEmail = async (params: IEmailParams) => {
    const data = {
        lib_version: '3.11.0',
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_USER_ID,
        template_params: {
            "from_name": params.email,
            "to_name": "aldrinmarz7@gmail.com",
            "message": params.message
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(() => {
        console.log('Your mail is sent!');
    }).catch(function (error) {
        console.error('Oops... ' + JSON.stringify(error));
    });
}