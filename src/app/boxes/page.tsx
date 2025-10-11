
import Link from 'next/link'

import { SpaceCase } from '@/components/space-case'

import { sections } from '@/data/inventory'


export const metadata = {
    title: 'Boxes | Christchurch Response Teams',
    description: 'Christchurch Response Team Equipment Boxes',
}

export default function BoxesIndexPage() {

    return <main className="container mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 mt-8">
            <h1 className="text-4xl font-bold text-center">Christchurch Response Team Equipment</h1>
            <p className=" text-center text-muted-foreground">Click on a box to see it&apos;s contents.</p>
        </div>
        

        {sections.map(section => <Section key={section.title} title={section.title}>
            {section.boxes.map(box => 
                <Link key={box.id} href={`/boxes/${box.id}`} title={`View contents of: ${box.id} ${box.label}`} className="hover:opacity-80 active:opacity-60 transition-opacity">
                    <SpaceCase 
                        label={box.label} 
                        number={box.number} 
                        team={box.team?.teamShortName}
                    />
                </Link>
            )}
        </Section>)}
        
    </main>
}





function Section({ children, title }: { children: React.ReactNode, title: string }) {
    return <section>
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left px-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-4">
            {children}
        </div>
    </section>
}