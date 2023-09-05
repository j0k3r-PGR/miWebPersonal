import './CardDescription.css'

export default function CardDescription({ text , setShowDescription}) {

    const closeDescription = () => {
        setShowDescription(false);
    };

    return (
        <div className='card-description'>
            <div>
                <p onClick={closeDescription} className='close'>X</p>
                <h2>Description</h2>
                <p className='text'>{ text }</p>
                <p className='outtext'>Cierre la ventana para iniciar el juego</p>
            </div>
        </div>
    );

}