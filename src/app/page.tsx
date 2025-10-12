import Image from 'next/image'


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
            src="/images/nzrt-logo-vertical.png"
            alt="NZRT logo"
            width={175}
            height={100}
            priority
            />
        
        <div className="font-mono text-sm/6">This is an placeholder site for future use by Christchurch Response Teams.</div>

        <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[220px]"
            href="https://www.civildefence.govt.nz/cdem-sector/nz-rts-new-zealand-response-teams"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official NEMA Page
          </a>

        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1877F2] text-white gap-2 hover:bg-[#166FE5] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.facebook.com/NZResponseTeams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            NZRTs on Facebook
          </a>

      </main>
    </div>
  );
}
