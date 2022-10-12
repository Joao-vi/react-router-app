export const debounce = (cb: (props:any) => void, delay = 300) => {
    let handler = 0

    return (args: any) => {
        clearTimeout(handler)

        handler = setTimeout(() => {
            cb(args)
        }, delay);
    }
}