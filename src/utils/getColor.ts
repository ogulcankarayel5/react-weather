export const getColor = (name: string) => {

    return getComputedStyle(document.documentElement).getPropertyValue(name);

};
