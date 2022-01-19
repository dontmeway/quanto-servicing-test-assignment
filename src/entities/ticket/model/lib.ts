export const formatMinutes = (input: number) => {
    const hours = Math.floor(input / 60)
    const minutes = input % 60 
    
    return `${hours < 10 ? "0" + hours : hours} ч ${minutes < 10 ? "0" + minutes : minutes} м`
}


export const getOverallDuration = (array: {duration: number}[]) => {
    return array.reduce((acc, curr) => acc + curr.duration, 0)
}