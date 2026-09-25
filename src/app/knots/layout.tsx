import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

import { MobileToc } from './mobile-toc'


export default function KnotsLayout({ children }: LayoutProps<'/knots'>) {
    return <div>
        <div className="print:hidden h-[40px] grid grid-cols-[40px_1fr_40px] items-center border-b bg-background shadow-lg">
            <MobileToc />
            <Link href="/knots">
                <h1 className="text-xl text-center font-bold">Manual on Knots</h1>
            </Link>
            <div></div>
        </div>
        <ScrollArea className="h-[calc(100vh-40px)] w-full">{children}</ScrollArea>
    </div>
}
