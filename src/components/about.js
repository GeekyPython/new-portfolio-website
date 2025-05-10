import './styles/about.css';

export const AboutPage = () => {
    return (
        <div className='about' id="about">
            <div className="about-image">
                <img src='/assets/my-image.jpg' alt="Purohit Iyer" />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <div className="about-content">
                    <p>
                    I'm Purohit Iyer, a fullstack software engineer with a passion for crafting intuitive, high-performance web applications. I specialize in building scalable solutions using modern technologies that not only meet functional requirements but also offer seamless user experiences.
                    </p>
                    <p>
                    Outside of work, I enjoy playing cricket and travelling — activities that help me recharge and bring a fresh perspective to my problem-solving approach.
                    </p>
                    <p>
                    I'm always open to collaborating on interesting projects or freelance work. If you’re looking for a developer to bring your ideas to life, feel free to reach out — I’d love to connect.
                    </p>
                </div>
            </div>         
        </div>
    );
}