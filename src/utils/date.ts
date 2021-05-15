export const getDayName = (timeEpoch : number) => {
    const date = new Date(timeEpoch* 1000).toLocaleString('en-us', {weekday:'long'})
    return date.slice(0,3)
}

export const getDecimalValue = (tempature : number) => {
    const decimal = tempature.toString().split(".")[0];
    return decimal
}