import './work.css';

export const WorkTile = (props) => {
    const { title, description, imageUrl } = props;
    const imageStyle = {
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={imageStyle} className="work-tile">
            <div className="work-container">
                <div className='work-description'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="work-nav">
                    <a href="#about" target="_blank">Learn more</a>
                </div>
            </div>
        </div>
    );
}