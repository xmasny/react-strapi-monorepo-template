export default ({ env }) => ({
    graphql: {
        config: {
            shadowCRUD: true,
            landingPage: true
        }
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD')
                }
            },
            settings: {
                defaultFrom: env('SMTP_USERNAME'),
                defaultReplyTo: 'info@desiatka.sk'
            }
        }
    }
});