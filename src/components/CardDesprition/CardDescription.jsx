import './CardDescription.css'

export default function CardDescription({ text }) {
    return (
        <div className='card-description'>
            <div>
                <p>X</p>
                <h2>Description</h2>
                <p>{ text }</p>
            </div>
        </div>
    );

}