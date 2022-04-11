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
                <label htmlFor="width">
                    Largura:
                    <input
                        type="number"
                        value={width}
                        min='2'
                        max='200'
                        onChange={(e) => setWidth(e.target.value)}
                />
                </label>

                <label htmlFor='height'>
                    Altura
                    <input
                        type="number"
                        name='height'
                        value={height}
                        min='2'
                        max='200'
                        onChange={(e) => setHeight(e.target.value)}
                        />
                </label>
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