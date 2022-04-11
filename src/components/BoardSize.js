import React, {useContext} from 'react'
import Context from '../context/Context';

const BoardSize = () => {
    const {
        setWidth,
        setHeight,
        width,
        height,
        setBoardVisible,
    } = useContext(Context);

    return (
        <>
        <p className='container margin-top'>Informe o tamanho desejado do board: </p>
        <div className="container">
        <form>
            <div className='container margin-top'>
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className='container margin-top'>
                <button
                    type="button"
                    onClick={()=>setBoardVisible(true)}
                >
                    Desenhar
                </button>
            </div>
        </form>
        </div>
        </>
  )
}

export default BoardSize