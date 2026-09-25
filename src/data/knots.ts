/*
 *  Copyright (c) 2025 Redcloud Development, Ltd.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 */

export type Classification = 'LOOP' | 'BEND' | 'HITCH' | 'RESCUE'

export type Fact = {
    label: string
    text: string
}

export type Credit = {
    text: string
    url: string
}

export type KnotImage = {
    filename: string
    width: number
    height: number
    alt: string
}

export type Knot = {
    id: string
    name: string
    classification: Classification
    otherNames?: string
    image?: KnotImage
    extraImages?: KnotImage[]
    facts: Fact[]
    steps?: string[]
    applications: string[]
    credits: Credit[]
}

export const knots: Knot[] = [
    {
        id: 'figure-8',
        name: 'Figure 8 Knot',
        classification: 'LOOP',
        image: { filename: 'figure-8.jpg', width: 1020, height: 678, alt: 'Figure 8 Knot tied in blue rope' },
        facts: [
            { label: 'Uses', text: 'The standard stopper and end-of-line knot in kernmantle rope. Stops a rope end running through a pulley or fraying and is the base shape every other knot in this section builds from. Easier to untie than a plain thumb knot after loading.' },
            { label: 'Cons', text: 'The Figure 8 Knot can fall undone and then has to be retied.' },
        ],
        applications: ['Stopper knot', 'End-of-line knot'],
        credits: [
            { text: 'Figure 8 Knot | How to tie a Figure 8 Knot using Step-by-Step Animations | Animated Knots by Grog. (2019, May 14).', url: 'https://www.animatedknots.com/figure-8-knot' },
        ],
    },
    {
        id: 'rethreaded-figure-8',
        name: 'Rethreaded Figure 8',
        classification: 'LOOP',
        image: { filename: 'rethreaded-figure-8.jpg', width: 1020, height: 678, alt: 'Rethreaded Figure 8 knot tied in blue rope' },
        facts: [
            { label: 'Uses', text: "Forms a non-slip loop directly around an object you can't drop a pre-tied loop over — a bar, a stretcher rail, a hand-hold." },
            { label: 'Warning', text: 'For the animation, the knot is shown with a short tail. The tail should be at least a fist width or the length of the knot itself.' },
        ],
        applications: ['Tag lines', 'The end of safety lines', 'Finishing lowering lines'],
        credits: [
            { text: 'Figure 8 Follow Through Loop | How to tie a Figure 8 Follow Through Loop using Step-by-Step Animations | Animated Knots by Grog. (2021, April 11).', url: 'https://www.animatedknots.com/figure-8-follow-through-loop-knot' },
        ],
    },
    {
        id: 'joining-figure-8',
        name: 'Joining Figure 8',
        classification: 'BEND',
        image: { filename: 'joining-figure-8.jpg', width: 1020, height: 678, alt: 'Joining Figure 8 knot tied in red and blue rope' },
        facts: [
            { label: 'Uses', text: 'The preferred way to join two synthetic kernmantle ropes of the same diameter end to end.' },
            { label: 'Safety', text: 'For critical loads, e.g., yourself (!), the joining Figure 8 should not be used with ropes that differ much in size, and for safety the ends should be longer.' },
            { label: 'Warning', text: 'For the animation, the knot is shown with a short tail. The tail should be at least a fist width or the length of the knot itself.' },
            { label: 'Pros and Cons', text: 'The advantage of the Figure 8 Bend is that even after considerable strain it remains relatively easy to undo.' },
        ],
        applications: ['Joining two ropes together of the same diameter'],
        credits: [
            { text: 'Figure 8 Bend | How to tie a Figure 8 Bend using Step-by-Step Animations | Animated Knots by Grog. (2019, May 8).', url: 'https://www.animatedknots.com/figure-8-bend-knot' },
        ],
    },
    {
        id: 'industrial-figure-8',
        name: 'Industrial Figure 8',
        classification: 'LOOP',
        otherNames: 'Double Figure 8 Loop, Bunny Ears, Anchor 8, Dog-eared Loop',
        image: { filename: 'industrial-figure-8.jpg', width: 1020, height: 678, alt: 'Industrial Figure 8 knot tied in blue rope' },
        facts: [
            { label: 'Uses', text: 'An exceptionally strong knot producing two independently adjustable loops at a rope end — each loop can be clipped to a separate anchor point.' },
            { label: 'Loop Size', text: 'In the animation the two loops have been made small. In practice they are usually much larger.' },
        ],
        applications: ['In conjunction with the vertical lift knot'],
        credits: [
            { text: 'Figure 8 Double Loop | How to tie a Figure 8 Double Loop using Step-by-Step Animations | Animated Knots by Grog. (2020, July 14).', url: 'https://www.animatedknots.com/figure-8-double-loop-knot' },
        ],
    },
    {
        id: 'round-turn-two-half-hitches',
        name: 'Round Turn and Two Half Hitches',
        classification: 'HITCH',
        image: { filename: 'round-turn-two-half-hitches.jpg', width: 1020, height: 678, alt: 'Round Turn and Two Half Hitches knot tied in rope' },
        facts: [
            { label: 'Uses', text: "Secures a rope's running end to a spar or ring — and, unlike most hitches, it can be tied while the line is already under tension." },
            { label: 'Round Turn', text: 'A round turn uses multiple passes of a line around a post to handle and control heavy loads or strain while the rest of a knot is tied.' },
            { label: 'Two Half Hitches', text: 'The two Half Hitches actually form a clove hitch round the standing end.' },
            { label: 'Direction', text: "Always tie the Half Hitches in the same 'direction'. If you start the first Half Hitch with the tail passing away from you above the rope, then do the same with the next (and the next)." },
        ],
        applications: ['Stretcher lashings'],
        credits: [
            { text: 'Round Turn & Two Half Hitches | How to tie a Round Turn & Two Half Hitches using Step-by-Step Animations | Animated Knots by Grog. (2019, May 16).', url: 'https://www.animatedknots.com/round-turn-two-half-hitches-knot' },
        ],
    },
    {
        id: 'alpine-butterfly',
        name: 'Alpine Butterfly',
        classification: 'LOOP',
        image: { filename: 'alpine-butterfly.jpg', width: 1020, height: 678, alt: 'Alpine Butterfly loop tied in blue rope' },
        extraImages: [
            { filename: 'alpine-butterfly-3d.png', width: 800, height: 800, alt: 'Alpine Butterfly knot, 3D rendered' },
            { filename: 'alpine-butterfly-hand-method.png', width: 800, height: 800, alt: 'Alpine Butterfly knot tied using the hand method, 3D rendered' },
        ],
        facts: [
            { label: 'Uses', text: 'A strong, locked loop tied anywhere along the length of a rope — not just at the ends. Holds well when loaded from either direction.' },
            { label: 'Tying it', text: 'There are several methods for tying the Alpine Butterfly Loop, including the hand method shown above.' },
            { label: 'Advantages', text: 'The Alpine Butterfly spreads load evenly on its two legs, allowing the isolation of the rope within the loop.' },
        ],
        applications: ['Roofing systems'],
        credits: [
            { text: 'Alpine Butterfly Loop | How to tie a Alpine Butterfly Loop using Step-by-Step Animations | Animated Knots by Grog. (2019, October 10).', url: 'https://www.animatedknots.com/alpine-butterfly-loop-knot' },
            { text: 'Alpine Butterfly. (N.D.). Nynix llc.', url: 'https://knots3d.com/en/alpine-butterfly-knot' },
            { text: 'Alpine Butterfly (Hand Method). (N.D.). Nynix llc.', url: 'https://knots3d.com/en/alpine-butterfly-hand-method-knot' },
        ],
    },
    {
        id: 'double-fishermans-bend',
        name: "Double Fisherman's Bend",
        classification: 'BEND',
        image: { filename: 'double-fishermans-bend.jpg', width: 1020, height: 678, alt: "Double Fisherman's Bend tied in red and blue rope" },
        facts: [
            { label: 'Uses', text: 'The go-to knot for joining two rope ends permanently into a loop — most often used to close a Prusik sling. Very strong, but hard to untie once loaded.' },
            { label: 'Pros', text: "The Double Fisherman's is a well known, reliable, compact knot suitable for use when retrieving an abseil." },
            { label: 'Cons', text: 'The Double Fisherman can lock up so tightly that it is effectively welded.' },
            { label: 'Warning', text: 'For the animation, the ends were left short. For critical loads, the ends must be left much longer.' },
        ],
        applications: ['Tying two lengths of rope together'],
        credits: [
            { text: "Double Fisherman's Bend | How to tie a Double Fisherman's Bend using Step-by-Step Animations | Animated Knots by Grog. (2019, May 8).", url: 'https://www.animatedknots.com/double-fishermans-bend-knot' },
        ],
    },
    {
        id: 'prusik-knot',
        name: 'Prusik Knot',
        classification: 'LOOP',
        image: { filename: 'prusik-knot.jpg', width: 1020, height: 678, alt: 'Prusik Knot tied in blue cord on red rope' },
        facts: [
            { label: 'Uses', text: 'Attaches a cord sling to a rope as an adjustable friction grip — slides freely under no load, and locks under load. The cord must be at least 3mm smaller in diameter than the main rope for it to work.' },
            { label: 'Making Prusik Loops', text: "Prusik loops may be constructed by joining together the two ends of an accessory cord (5 or 6 mm) using a Double Fisherman's Bend." },
            { label: 'Warning', text: 'Must never be shock loaded.' },
        ],
        applications: ['Abseiling'],
        credits: [
            { text: 'Prusik Knot | How to tie a Prusik Knot using Step-by-Step Animations | Animated Knots by Grog. (2019, May 16).', url: 'https://www.animatedknots.com/prusik-knot' },
        ],
    },
    {
        id: 'tape-knot',
        name: 'Tape Knot',
        classification: 'BEND',
        otherNames: 'Water Knot, Ring Bend, Grass Knot, Overhand Follow-Through',
        image: { filename: 'tape-knot.jpg', width: 1020, height: 678, alt: 'Tape Knot tied in orange webbing' },
        facts: [
            { label: 'Uses', text: 'Joins two pieces of webbing strapping by re-threading.' },
            { label: 'Warning', text: 'For the animation, the ends were left short. For critical loads, the ends must be left much longer.' },
        ],
        applications: ['Anchors'],
        credits: [
            { text: 'Water Knot | How to tie a Water Knot using Step-by-Step Animations | Animated Knots by Grog. (2019, May 9).', url: 'https://www.animatedknots.com/water-knot' },
        ],
    },
    {
        id: 'munter-hitch',
        name: 'Munter Hitch',
        classification: 'HITCH',
        facts: [
            { label: 'Uses', text: 'Creates controllable friction directly on a karabiner for lowering or raising a line — no separate belay device needed.' },
            { label: 'Requirements', text: 'Use a carabiner large enough to allow the Munter Hitch to be inverted through the carabiner when pulled.' },
            { label: 'Advantages', text: 'The greatest advantage of the Munter is that it can be used with minimum equipment — just a locking carabiner.' },
            { label: 'Disadvantages', text: 'The Munter Hitch kinks the rope, imparts a twist to it during descent, and also makes the rope fuzzy if used often.' },
        ],
        applications: ['Roofing systems'],
        credits: [
            { text: 'Munter Hitch. (N.D.). Nynix llc.', url: 'https://knots3d.com/en/munter-hitch-knot' },
        ],
    },
    {
        id: 'vertical-lift-knot',
        name: 'Vertical Lift Knot',
        classification: 'RESCUE',
        facts: [
            { label: 'Uses', text: "A full-body harness tied directly into the bight of a rope — no hardware, no ends used — for raising or lowering a casualty in a vertical shaft. Originally developed for sewer rescues. Because it's tied in the bight, both rope ends stay free to haul on and to keep the casualty centred, and there's no free knot that can slip undone." },
            { label: 'Warning', text: "Ropes must not cross between the legs. Both sides must be tied the same way — don't mix tying methods. Limited to walking-wounded casualties: this rig gives little protection and can worsen injuries." },
        ],
        steps: [
            "Take the bight of the rope behind the casualty's neck, run it down their front, between their legs (front to rear), then back up their sides to the front and over the shoulders — running ends nearer the arms.",
            "On each side, pass a loop of the running end under the first rope so the casualty's arm can go through the loop.",
            'Adjust the ropes and padding on both sides, starting at the neck, so the fit is secure and even.',
            "Tie a figure 8 on a bight, using both ropes together, behind the casualty's neck to complete the knot.",
            'Attach the lowering line to the tails with a rethreaded figure 8. Spare tail can be used as guide-lines or secured out of the way.',
        ],
        applications: ['Improvised harness'],
        credits: [],
    },
]

export const classificationLabels: Record<Classification, string> = {
    LOOP: 'Loop',
    BEND: 'Bend',
    HITCH: 'Hitch',
    RESCUE: 'Rescue',
}

export const classificationColours: Record<Classification, string> = {
    LOOP: 'oklch(0.55 0.18 260)',
    BEND: 'oklch(0.55 0.18 20)',
    HITCH: 'oklch(0.55 0.18 150)',
    RESCUE: 'oklch(0.55 0.2 30)',
}
