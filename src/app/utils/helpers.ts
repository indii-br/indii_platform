export const convertArrayInObject = (array: Array<any>) => {
    const obj = {};

    array.forEach((v, i) => {
        obj[v.key] = v.label
    })

    return obj;
}