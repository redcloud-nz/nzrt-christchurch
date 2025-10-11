
import Image from 'next/image'
import { tv } from 'tailwind-variants'
import { ComponentProps } from 'react'

const spaceCaseVariants = tv({
    slots: {
        base: "relative font-sans font-bold uppercase",
        labelContainer: "absolute w-full top-[19%] left-0 right-0 flex justify-center",
        label: "bg-white/75 rounded-md tracking-tight",
        teamContainer: "absolute w-full top-[40%] left-0 right-0 flex justify-center",
        team: "bg-white/75 rounded-md tracking-tight",
        numberContainer: "absolute w-full bottom-[35%] left-0 right-0 flex justify-center",
        number: "bg-white/75 rounded-md text-center tracking-tight",
    },
    variants: {
        size: {
            sm: {
                base: "w-[125px] h-[125px]",
                label: "px-[2px] py-[0.5px] text-[6px]",
                team: "px-[2px] py-[0.5px] text-[6px]",
                number: "w-[16px] h-[16px] text-[10px] pt-[0.5px]"
            },
            md: {
                base: "w-[250px] h-[250px]",
                label: "px-[4px] py-[1px] text-[12px]",
                team: "px-[4px] py-[1px] text-[12px]",
                number: "w-[32px] h-[32px] text-[20px] pt-[1px]"
            }
        }
    }
})


export function SpaceCase({ className, label, number, size = "md", team, ...props }: Omit<ComponentProps<'div'>, 'children'> & { label?: string, number?: string, size?: 'sm' | 'md', team?: string }) {

    const slots = spaceCaseVariants({ size })

    return <div className={slots.base({ className })} {...props}>
        <Image
            src="/space-case-1.png"
            alt="Space Case"
            width={250}
            height={250}
            priority
        />
        { label && <div className={slots.labelContainer()}>
            <div className={slots.label()}>{label}</div>
        </div>}
        { team && <div className={slots.teamContainer()}>
            <div className={slots.team()}>{team}</div>
        </div>}
        { number && <div className={slots.numberContainer()}>
            <div className={slots.number()}>{number}</div>
        </div>}
    </div>
}