export function meh() {
    return "MEH.!!!"
}

export function CleanDateTime(ticks) {
    const date = new Date(ticks);
    let m = convertIntToString(date.getMonth() + 1),
        d = convertIntToString(date.getDate()),
        h = convertIntToString(date.getHours()),
        min = convertIntToString(date.getMinutes())
    return `${date.getFullYear()}-${m}-${d} ${h}:${min}`
}

function convertIntToString(num) {
    return num > 9 ? num.toString() : `0${num}`
}