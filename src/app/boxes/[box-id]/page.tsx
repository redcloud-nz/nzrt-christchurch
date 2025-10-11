import { notFound } from 'next/navigation'

import { SpaceCase } from '@/components/space-case'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
                    {box.items.map((item, index) => <li key={index} className="flex items-center gap-4">
                        <Checkbox id={`item-${index}`}/>
                        <label htmlFor={`item-${index}`} className="flex items-center gap-4">
                            <span className="w-8 font-mono mr-2 text-right">{item.quantity && <>{item.quantity}&times;</>}</span>
                            <span>{item.name}</span>
                            {item.subname && <span className="text-muted-foreground">({item.subname})</span>}
                        </label>
                    </li>)}
                    {box.bags && box.bags.map((bag, index) => <li key={index}>
                        <div className="font-bold mb-2">Bag {bag.identifier} - {bag.name}</div>
                        <ul className="space-y-2">
                            {bag.items.map((item, index) => <li key={index} className="flex items-center gap-4">
                                <Checkbox id={`item-${index}`}/>
                                <label htmlFor={`item-${index}`} className="flex items-center gap-4">
                                    <span className="w-8 font-mono mr-2 text-right">{item.quantity && <>{item.quantity}&times;</>}</span>
                                    <span>{item.name}</span>
                                    {item.subname && <span className="text-muted-foreground">({item.subname})</span>}
                                </label>
                            </li>)}
                        </ul>
                        
                    </li>)}
                </ul>
            </CardContent>
        </Card>
    </main>
}