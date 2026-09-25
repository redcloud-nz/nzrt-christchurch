
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ItemData } from '@/data/box'
import { allBoxes } from '@/data/inventory'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export default async function BoxPrintPage(props: PageProps<'/boxes/[box-id]/print'>) {
    const { 'box-id': boxId} = await props.params;

    const box = allBoxes.find(b => b.id === boxId)

    if (!box) notFound()

    return <div className="w-full not-print:p-4 not-print:bg-neutral-200">
        <Sheet className="not-print:mx-auto not-print:flex not-print:flex-col not-print:items-stretch">
            <Header/>
            <div className="h-100 border-1 border-border">
                <div className="h-16 flex bg-color-neutral-200 items-stretch border-b border-border">
                    <div className="aspect-square flex flex-col justify-center items-center">
                        <div className="text-2xl font-bold">{box.number}</div>
                    </div>
                    <div className="grow flex justify-center items-center border-x border-border">
                        <div className="text-2xl">{box.label}</div>
                    </div>
                    <div className="aspect-square flex flex-col justify-center items-center">
                        <div></div>
                    </div>
                </div>
            </div>
        </Sheet>
    </div>
}

export function Sheet({ className, ...props}: ComponentProps<'div'>) {
    return <div className={cn("not-print:w-[210mm] not-print:p-[10mm] bg-white", className)} {...props}/>
}

function Header() {
    return <div className="w-full flex items-center justify-end gap-4">
        {/* <Image
            src="/images/nzrt-logo-vertical.png"
            alt="New Zealand Response Teams Logo"
            width={879}
            height={1037}
            className="flex-0 h-20"
        /> */}
        <Image
            src="/images/ccc-logo-black.svg"
            alt="Christchurch Response Teams Logo"
            width={2085}
            height={507}
            className="flex-0 h-12"
        />
    </div>
        
}