import { TeamData } from './teams'


export interface BoxData {
    id: string
    label: string;
    number: string;
    image?: {
        filename: string;
        size: { width: number; height: number };
    }
    team?: TeamData;
    items: ItemData[]
    bags?: Bag[]
    
}

export interface ItemData {
    name: string
    subname?: string
    quantity?: number
    imageUrl?: string
}

export interface Bag {
    name: string
    identifier: string
    items: ItemData[]
}