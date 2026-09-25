import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

export default function BoxesLayout({ children }: LayoutProps<'/boxes'>) {
    return <div>
        <div className="print:hidden h-[40px] grid grid-cols-[40px_1fr_40px] items-center border-b bg-background shadow-lg">
            <div></div>
            <Link href="/boxes">
                <h1 className="text-xl text-center font-bold">Christchurch RT Boxes</h1>
            </Link>
            <div></div>
        </div>
        <ScrollArea className="h-[calc(100vh-40px)] w-full">{children}</ScrollArea>
    </div>
}