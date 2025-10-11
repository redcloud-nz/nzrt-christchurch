import { TeamData } from './teams'


export interface BoxData {
    id: string
    label: string;
    number: string;
    team?: TeamData;
    items: ItemData[]
    bags?: Bag[]
}

export interface ItemData {
    name: string
    subname?: string
    quantity?: number
}

export interface Bag {
    name: string
    identifier: string
    items: ItemData[]
}