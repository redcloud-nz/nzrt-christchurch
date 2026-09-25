/*
 *  Copyright (c) 2025 Redcloud Development, Ltd.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 */

import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen">
      <main className="container mx-[auto] flex flex-col row-start-2 items-center p-8 md:pt-20 gap-8">
        <div className="flex flex-col justify-center items-center gap-12">
                {/* <Image
                    src="/images/nzrt-logo-horizontal.png"
                    alt="New Zealand Response Team Logo"
                    width={2773}
                    height={1350}
                    priority
                    className='max-h-50 object-contain'
                /> */}
                <Image
                    src="/images/nzrt-logo-vertical.png"
                    alt="New Zealand Response Team Logo"
                    width={879}
                    height={1038}
                    priority
                    className='max-w-60 object-contain'
                />
            
                <Image
                    src="/images/ccc-logo-black.svg"
                    alt="Christchurch City Council Logo"
                    width={2085}
                    height={507}
                    className='max-w-64 object-contain'
                />
        </div>
        
        
        <div className="font-mono text-sm/6">This is an placeholder site for future use by Christchurch Response Teams.</div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
            <h2 className="col-span-full font-semibold justify-self-center mt-8">Official CDEM Pages</h2>
            <WebsiteButton href="https://www.civildefence.govt.nz/cdem-sector/nz-rts-new-zealand-response-teams">
                National Emergency Management Agency
            </WebsiteButton>
            <WebsiteButton href="https://ccc.govt.nz/services/civil-defence">
                Christchurch City Council
            </WebsiteButton>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-4">
            
            <h2 className="col-span-full font-semibold justify-self-center mt-8">Facebook Pages</h2>
            <FacebookButton href="https://www.facebook.com/NZResponseTeams/" className="sm:col-span-2 md:col-span-1">NZ Response Teams</FacebookButton>
            <FacebookButton href="https://www.facebook.com/NzRt11/" className="text-base">NZ-RT11</FacebookButton>
            <FacebookButton href="https://www.facebook.com/profile.php?id=100064541955934" className="text-base">NZ-RT14</FacebookButton>
            
        </div>
      </main>
    </div>
  )
}

function WebsiteButton({ className, ...props }: ComponentProps<'a'>) {
    return <a
        className={cn("rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent hover:underline font-medium text-sm h-10 sm:h-12 px-4", className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
    />
}

function FacebookButton({ className, children, ...props }: ComponentProps<'a'>) {
    return <a
        className={cn("rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1877F2] text-white gap-2 hover:bg-[#166FE5] hover:underline  font-medium text-sm h-10 sm:h-12 px-4 sm:px-5 sm:w-auto", className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
    >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        {children}
    </a>
}
