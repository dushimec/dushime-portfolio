import { Link } from "react-router-dom";
import profile from '../../images/chriss.png';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-base font-bold mb-3 text-teal-light">DUSHIME Christian</h3>
            <p className="text-xs md:text-sm mb-3">
              Full-Stack Software Developer specializing in creating scalable, secure, and efficient web applications.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/christian-dushime/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/dushimec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/DushimeChr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold mb-3 text-teal-light">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-xs md:text-sm text-teal hover:text-teal-light hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-xs md:text-sm text-teal hover:text-teal-light hover:underline">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-xs md:text-sm text-teal hover:text-teal-light hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-xs md:text-sm text-teal hover:text-teal-light hover:underline">
                  Process
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1i2tEMJYiLZt_moMix61C_DeEyuWjZ-S9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-teal hover:text-teal-light hover:underline flex items-center"
                >
                  Resume
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-3 text-teal-light">Contact</h3>
            <ul className="space-y-1 text-xs md:text-sm text-foreground">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dushimec515@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal-light hover:underline"
                >
                  Email: dushimec515@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/250789356233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal-light hover:underline"
                >
                  Phone: +250 789 356 233
                </a>
              </li>
              <li>Location: Kabuga, Rwanda</li>
            </ul>
            {/* Map with Profile Image Overlay */}
            <div className="mt-4 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.61525606182!2d30.206780053596564!3d-1.9734577818659966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db59c017152edb%3A0x12d7de49de420585!2sKabuga!5e0!3m2!1sen!2srw!4v1742907620656!5m2!1sen!2srw"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location in Kabuga, Rwanda"
              ></iframe>
              {/* Profile Image Overlay */}
              <img
                src={profile} // Replace with your actual image path
                alt="DUSHIME Christian Profile"
                className="absolute bottom-2 right-2 w-12 h-12 rounded-full border-2 border-teal-light object-cover"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-4 text-center text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DUSHIME Christian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
