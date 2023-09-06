import './cardWinner.css';

export default function CardWinner({winner}) {
    return (
        <div className='win'>
            <div className='cardWinner' >
                <p>{winner}</p>
                <button className='playagain' onClick={() => window.location.reload()}>Play again</button>
            </div>
        </div>
    );
}