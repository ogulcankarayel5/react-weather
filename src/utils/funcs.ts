

export const renameKey = (obj: Object, newKeys: {[key: string]: string}) => {
    let replacedItems = Object.keys(obj).map((item: any) => {
        const newKey = newKeys[item] || item;
        return { [newKey] : (obj as any)[item] };
       
    })

    const newObject = (replacedItems as any).reduce((a: any, b: any) => Object.assign({}, a, b));
    return newObject;
}