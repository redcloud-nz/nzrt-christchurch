import Image from 'next/image'
import { notFound } from 'next/navigation'

import { SpaceCase } from '@/components/space-case'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import { ItemData } from '@/data/box'
import { allBoxes } from '@/data/inventory'



export async function generateMetadata(props: PageProps<'/boxes/[box-id]'>) {
    const { 'box-id': boxId} = await props.params;

    const box = allBoxes.find(b => b.id === boxId)

     if (!box) notFound()

    return {
        title: `${box.label} | Christchurch Response Teams`,
        description: `Contents of Christchurch Response Team Equipment Box: ${box.label}`,
    }
}

export async function generateStaticParams() {
    return allBoxes.map(box => ({
        'box-id': box.id,
    }))
}

export default async function BoxPage(props: PageProps<'/boxes/[box-id]'>) {
    const { 'box-id': boxId} = await props.params;

    const box = allBoxes.find(b => b.id === boxId)

    if (!box) notFound()

    return <main className="container mx-auto flex flex-col lg:flex-row p-2 gap-4">
        
        <div className="flex items-center gap-4 self-start">
            <SpaceCase 
                key={box.id}
                className="hidden sm:block"
                label={box.label} 
                number={box.number} 
                size="sm"
                team={box.team?.teamShortName}
            />
            <div className="flex flex-col items-start">
                <h2 className="text-4xl font-bold py-2">{box.label}</h2>
                <div className="text-xl font-mono font-bold px-4 py-2" style={{ backgroundColor: box.team?.teamColour }}>{box.id}</div>
            </div>
        </div>
        <Card className="grow">
            <CardHeader>
                <CardTitle className=" text-xl font-bold">Contents</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {box.items.map((item, index) => <Item key={index} id={`item-${index}`} item={item} />)}
                    {box.bags && box.bags.map((bag, index) => <li key={index} className="my-4">
                        <div className="font-bold mb-2">Bag {bag.identifier} - {bag.name}</div>
                        <ul className="space-y-2">
                            {bag.items.map((item, index) => <Item key={index} id={`bag-${bag.identifier}-item-${index}`} item={item} />)}
                        </ul>
                    </li>)}
                </ul>
            </CardContent>
        </Card>
    </main>
}

function Item({ id, item }: { id: string, item: ItemData }) {
    
    return <li className="flex items-start gap-2">
        <Checkbox id={id} className="my-0.5"/>
        <label htmlFor={id} className="flex gap-x-2">
            <div className="w-8 font-mono mr-2 text-right">{item.quantity && <>{item.quantity}&times;</>}</div>
            <div>
                {item.name}
                {" "}
                {item.subname && <span className="text-muted-foreground">({item.subname})</span>}
            </div>
            
        </label>
        
        {item.imageUrl && <Dialog>
            <DialogTrigger className="hover:opacity-80 active:opacity-60 transition-opacity">
                <Image src={item.imageUrl} alt={item.name} width={32} height={32} className="ml-4"/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{item.name} {item.subname && <span className="text-muted-foreground">({item.subname})</span>}</DialogTitle>
                </DialogHeader>
                <Image src={item.imageUrl} alt={item.name} width={400} height={400} className="mx-auto"/>
            </DialogContent>
        </Dialog>}
    </li>
}