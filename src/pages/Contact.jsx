import React from 'react'
import './Contact.css'


export default function Contact() {

    const sendToTelegram = async (name, email, subject, message) => {
        const token = '7962235971:AAE0wF3vE3vMYOjKK2VK6kVc_1oMJL36sl4';
        const chatId = '6468423303';
        const text = `📩 Yangi xabar:\n\n👤 Ismi: ${name}\n📧 Email: ${email}\n📝 Mavzu: ${subject}\n💬 Xabar: ${message}`;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        await sendToTelegram(name, email, subject, message);
        alert('✅ Your message has been sent successfully!');
        e.target.reset();
    };

    return (
        <div className='contact-container'>
            <h1>Contact me</h1>
            <div className='contact'>
                <div className='cnt-left'>
                    <ul>
                        <li>My phone number</li>
                        <p>+998 93 000 00 00</p>

                        <li>My telegram</li>
                        <p>@adhamjonsodiqov</p>

                        <li>My email</li>
                        <p>adhamjonsodiqov03@gmail.com</p>

                        <li>My address</li>
                        <p>Samarkand, Uzbekistan</p>
                    </ul>
                </div>

                <div className='cnt-right'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" name="name" required />
                        <input type="text" placeholder="Phone Number" name="phone" />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="text" placeholder="Subject" name="subject" required />
                        <textarea placeholder="Message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
