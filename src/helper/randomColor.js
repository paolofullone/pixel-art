    const generateColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = 'rgb(' + r + ',' + g + ',' + b + ')';
        return color;
    }

    const arrColors = [];
    const nColors = 10;
    for (let i = 0; i < nColors; i++) {
        arrColors.push(generateColor());
    }

    export {arrColors}