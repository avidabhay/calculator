// import Calculator from "./Calculator";

export default function KeyBoard({ onClick }) {
    const handleClick = (e) => {
        const x = e.target;
        onClick(x);
    };

    return (
        <>
            <button className="delete" onClick={(e) => handleClick(e)}>
                Del
            </button>
            <button className="answer" onClick={(e) => handleClick(e)}>
                =
            </button>
            <button className="clear" onClick={(e) => handleClick(e)}>
                Clr
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                1
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                2
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                3
            </button>
            <button className="plus" onClick={(e) => handleClick(e)}>
                +
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                4
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                5
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                6
            </button>
            <button className="minus" onClick={(e) => handleClick(e)}>
                -
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                7
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                8
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                9
            </button>
            <button className="multiply" onClick={(e) => handleClick(e)}>
                *
            </button>
            <button className="point" onClick={(e) => handleClick(e)}>
                .
            </button>
            <button className="number" onClick={(e) => handleClick(e)}>
                0
            </button>
            <button className="percent" onClick={(e) => handleClick(e)}>
                %
            </button>
            <button className="divide" onClick={(e) => handleClick(e)}>
                ÷
            </button>
        </>
    );
}
