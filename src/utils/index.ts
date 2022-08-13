
export function pause(miliseconds: number) {
    return {
        then: (fn: Function) => { setTimeout(fn, miliseconds) }
    }
}