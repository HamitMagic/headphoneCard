export interface Icolors {
    color: string,
    name: string,
}
export default interface Icard {
    name: string,
    price: string,
    description: string,
    id: number,
    link: string,
    src: string,
    colors: Icolors[],
}