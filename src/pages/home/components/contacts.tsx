import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

function Contacts() {
    const contacts = [
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/justin-cheah-yun-fei",
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            href: "https://github.com/JCSnap/",
        },
        {
            icon: <MdEmail />,
            label: "Email",
            href: "mailto:justin.cheah@u.nus.edu",
        },
        {
            icon: <FaTelegramPlane />,
            label: "Telegram",
            href: "https://t.me/jcjustinn",
        },
    ];
    return (
        <div className="mt-10 mb-6">
            <div className="flex justify-center">
                {contacts.map((contact) => (
                    <a
                        key={contact.href}
                        href={contact.href}
                        className="flex items-center mx-2 hover:text-sky-800 transition-colors duration-300"
                    >
                        {contact.icon}
                        <span className="ml-2">{contact.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
