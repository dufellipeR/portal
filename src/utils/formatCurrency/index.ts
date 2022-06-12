const formatCurrency = (value: number | string) => {
    let i = value
    if (!(typeof (value) === 'number')) {
        i = parseInt(value)
    }

    return i.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', });
}

export default formatCurrency
