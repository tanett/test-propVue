export const parseDataFromCsvHelper = (data: Record<string, unknown>[]) => {
    const headers = data[0];


    const mapped = data.slice(1).map((item) => {
        const keys = Object.keys(item);
        const newObject: Record<string, unknown> = {}
        keys.forEach((key) => {
            newObject[headers[key.toString()] as string] = item[key];
        })
        return newObject
    });
    return mapped
}
