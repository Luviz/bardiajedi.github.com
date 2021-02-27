export function meh(){
    return "MEH.!!!"
}

export function CleanDateTime(ticks){
    const date = new Date(ticks);

    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
}