import { Resend } from 'resend';
import EmailFinance from '@/src/emails/finance';
const resend = new Resend(process.env.RESEND_API_KEY);

export function sendmail() {
    resend.sendEmail({
        from: 'webdevelop.carryboy@gmail.com',
        to: 'nammonnnt@gmail.com',
        subject: 'Test system',
        react: EmailFinance()
    });
}