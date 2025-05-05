import { TextField, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import './styles/contact.css';
import { useSelector } from "react-redux";

export const ContactPage = () => {
    const theme = useSelector((state) => state.pageStyles.theme);
    const borderStyles = {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: theme === "light" ? "#2c3e50" : "#cbd5e1", // Default border color
            },
            "&:hover fieldset": {
                borderColor: theme === "light" ? "#2c3e50" : "#cbd5e1", // Hover border color
            },
            "&.Mui-focused fieldset": {
                borderColor: theme === "light" ? "#2c3e50" : "#cbd5e1", // Focused border color
            },
            "& .MuiInputLabel-root": {
            color: theme === "light" ? "#2c3e50" : "#cbd5e1", // Default label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: theme === "light" ? "#2c3e50" : "#cbd5e1", // Focused label color
            }
        }
    };

    const buttonStyles = {
        backgroundColor: "#2c3e50",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#2c3e50",
        },
    };

    return (
        <div className="contact-section" id="contact">
            <h1>Contact Me</h1>
            <h2>I'd love to hear from you!</h2>

            <div className="contact-container">
                <div className="contact-form">
                    <TextField id="name" className="contact-inputs" label="Name" variant="outlined" fullWidth margin="normal" sx={borderStyles} />
                    <TextField id="email" className="contact-inputs" label="Email" variant="outlined" fullWidth margin="normal" sx={borderStyles}/>
                    <TextField id="message" className="contact-inputs" label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} sx={borderStyles}/>
                    <Button variant="contained" color="primary" className="contact-button" sx={buttonStyles}>Send</Button>
                </div>
                <div className="contact-info">
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" className="contact-detail-icon"/>
                        <p>purohitiyer@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faLocation} size="2xl" className="contact-detail-icon"/>
                        <p>Mahbub Nagar, Nagawara, Bengaluru - 560045</p>
                    </div>
                    <hr/>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/purohitiyer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </a>
                        <a href="https://www.facebook.com/purohit.iyer.5" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2xl" />
                        </a>
                        <a href="https://www.instagram.com/purohitiyer/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2xl" />
                        </a>
                        <a href="https://twitter.com/purohitiyer" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Purohit Iyer. All Rights Reserved.</p>
        </div>
    );
}