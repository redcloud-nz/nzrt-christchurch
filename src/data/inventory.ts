import { BoxData } from './box'
import { teams } from './teams'



export const teamBoxTemplates: Omit<BoxData, 'id' | 'team'>[] = [
    { label: "Blankets", number: "01", items: [
        { name: "Blankets", quantity: 12 },
    ] },
    { 
        label: "Casualty Clearing", 
        number: "02",
        image: {
            filename: 'Team-Casualty-Clearing-20251107.jpeg',
            size: { width: 1600, height: 1200 }
        },
        items: [
            { name: "Medical Forms", quantity: 1 },
            { name: "Triage Tags" , quantity: 20, subname: "Set of 4 bands" },
            { name: "Casualty Tags", quantity: 50 },
            { name: "Box of Gloves", quantity: 1 },
            { name: "Box of Pens" , quantity: 1 },
            { name: "Red Laminated Cards", quantity: 2 },
            { name: "Yellow Laminated Cards", quantity: 2 },
        ]
    },
    { label: "Consumables - PPE", number: "03", items: [
        { name: "Medical Gloves", quantity: 1, subname: "box, S" },
        { name: "Medical Gloves", quantity: 1, subname: "box, M" },
        { name: "Medical Gloves", quantity: 1, subname: "box, L" },
        { name: "Medical Gloves", quantity: 1, subname: "box, XL" },
        { name: "Ear Plugs", quantity: 1, subname: "bag" },
        { name: "Ear Muffs", quantity: 1, subname: "pair" },
        { name: "Leather Gloves", quantity: 4, subname: "pairs" },
        { name: "Whistle", quantity: 4 },
        { name: "Duct Tape", quantity: 2, subname: "roll" },
        { name: "Goggles", quantity: 2 },
        { name: "Respirator Filters", quantity: 5 },
        { name: "Dust Pan and Brush", quantity: 1 },
        { name: "Scrubbing Brush", quantity: 1 },
        { name: "Rubbish Bags", quantity: 1, subname: "roll, black" },
        { name: "Paper Towels", quantity: 1, subname: "roll" },
        { name: "Toilet Paper", quantity: 6, subname: "roll" },
        { name: "Vapo Rub", quantity: 1, subname: "jar" },
        { name: "Hand Sanitiser", quantity: 1, subname: "bottle" },

    ] },
    { 
        label: "High Angle Kit", 
        number: "04",
        image: {
            filename: 'Team-High-Angle-20251107.jpeg',
            size: { width: 1200, height: 1600 }
        },
        items: [
            { name: "Edge Protector", quantity: 2, subname: "with cord" },
            { name: "Throw line", quantity: 2, subname: "with bag" },
        ],
        bags: [
            { name: "Tapes", identifier: "A", items: [
                { name: "Webbing Tape", quantity: 2, subname: "green, 3m" },
                { name: "Webbing Tape", quantity: 2, subname: "red, 2m" },
                { name: "Webbing Tape", quantity: 2, subname: "yellow, 1m" }
            ]},
            { name: "Bridle", identifier: "B", items: [
                { name: "Stretcher Bridle", quantity: 1 },
                { name: "Connecting Tape", quantity: 4, subname: "attached" }
            ]},
            { name: "Carabiners", identifier: "C", items: [
                { name: "Carabiner", quantity: 15, subname: "Groups of 5" }
            ]},
            { name: "Descenders", identifier: "D", items: [
                { name: "Petzl I'D S", quantity: 1, subname: "gold", imageUrl: '/images/items/Petzl-ID.png' },
                { name: "Kong Indo Evo Plus", quantity: 2, imageUrl: '/images/items/Kong-IndyEvoPlus.png' }
            ]},
            { name: "Rope Grabs and Pulleys", identifier: "E", items: [
                { name: "Rope Grab", quantity: 4, subname: "red", imageUrl: '/images/items/DMM-Buddy.png' },
                { name: "Single Pulley", quantity: 3, subname: 'red' },
                { name: "Double Pulley", quantity: 2, subname: 'gold' },
                { name: "Swivel", quantity: 1 }
            ]},
            { name: "Prusiks", identifier: "F", items: [
                { name: "Prusik", quantity: 4, subname: "red, 46cm" },
                { name: "Prusik", quantity: 4, subname: "green, 64cm" },
                { name: "Storm Lanyard", quantity: 2, subname: "yellow" },
                { name: "Load Release Hitch", quantity: 1, subname: "with 2 carabiners" },
            ]}
            
        ]
    },
    { label: "Electrical", number: "06", items: [
        { name: "LED Light", quantity: 4, },
        { name: "Extension Lead", quantity: 2 },
        { name: "Cord Tidy", quantity: 2 },
        { name: "Power Board", quantity: 1 },
        { name: "C4 Adaptor (male) to Flat Pin (female)", quantity: 1 },
        { name: "C4 Adaptor (female) to Flat Pin (male)", quantity: 1 },
        { name: "Waterproof Box", quantity: 1, subname: "green" }
    ] },
    { label: "Medical", number: "08", items: [] },
    { label: "Ropes", number: "10", items: [
        { name: "12m Lines", quantity: 12, subname: "11mm, red" },
        { name: "Personal Lines", quantity: 4, subname: "9mm" },
        { name: "Lashing Lines", quantity: 4, subname: "6mm, green" },
    ] },
    { label: "Site Control", number: "12", items: [
        { name: "Barrier Tape", quantity: 2, subname: "roll, red/white" },
        { name: "Spray Paint", quantity: 4 },
        { name: "Air Horn", quantity: 2 },
        { name: "Writing Implements", quantity: 1, subname: "box of pens and markers" },
        { name: "Notebook", quantity: 1, subname: "large" },
        { name: "CDEM Forms", quantity: 1, subname: "folder" },
        { name: "Voltage tester", quantity: 1 },
        { name: "T Card Holder", quantity: 1 },
        { name: "T Cards", quantity: 1 },
        { name: "Maps" },
        { name: "Batteries", subname: "assorted" }
    ] },
    { label: "Radio", number: "13", items: [
        { name: "Base Radio", quantity: 1 },
        { name: "Radio Aerial", quantity: 1 },
        { name: "Power Cord", quantity: 1, subname: "240v"},
        { name: "Lifeguard 4way Multi Box", quantity: 1 },
        { name: "Extension Lead", quantity: 1 },
        { name: "Communication Plan", quantity: 1, subname: "laminated" },
        { name: "Radio Harness", quantity: 1 }

    ] },
    { label: "Tarpaulins", number: "14", items: [
        { name: "Tarpaulin", quantity: 8 },
    ] },
    { label: "Tools - Small", number: "15", items: [
        { name: "Spades", quantity: 2, subname: "folding" },
        { name: "Hacksaw", quantity: 1, subname: "with blade" },
        { name: "Pruning Saw", quantity: 1 },
        { name: "Club Hammer", quantity: 2 },
        { name: "Claw Hammer", quantity: 2 },
        { name: "Axe", quantity: 1 },
        { name: "Chisel", quantity: 2 },
        { name: "Plyers", quantity: 1 },
        { name: "Spanner", quantity: 2 },
        { name: "Crow bar", quantity: 1 },
        { name: "Pry Bar", quantity: 2 },
        { name: "Wooden Wedge", quantity: 1, subname: "small"},
        { name: "Hand Drill", quantity: 1, subname: "with bit" },


    ] },
    { label: "Tools - Large", number: "16", items: [
        { name: "Bolt Cutters", quantity: 1, subname: "small" },
        { name: "Bolt Cutters", quantity: 1, subname: "large" },
        { name: "Axe", quantity: 2 },
        { name: "Sledge Hammer", quantity: 2 },
        { name: "Bow Saw", quantity: 1 },
        { name: "Timber Saw", quantity: 1 },
        { name: "Wooden Wedge", quantity: 1, subname: "large" },
        { name: "Crow Bar", quantity: 1 },
    ] },
    { label: "Vehicle Recovery", number: "17", items: [
        { name: "Snatch Strap", quantity: 1, subname: "blue" },
        { name: "Snig Chain", quantity: 1, subname: "bucket" },
        { name: "Recovery Strap", quantity: 2, subname: "orange"},
        { name: "Winch Dampener", quantity: 1 },
        { name: "D-Shackles", quantity: 6, subname: "medium" },
        { name: "D-Shackle", quantity: 1, subname: "large" },
        { name: "Tow Bar Connector", quantity: 1, subname: "with D-Shackle" },
    ] },
]

export interface SectionData {
    title: string
    boxes: BoxData[]
}

export const sections: SectionData[] = [
    ...teams.map(team => ({
        title: team.teamName,
        boxes: teamBoxTemplates.map(box => ({ ...box, id: `${team.teamShortName}-${box.number}`, team: team }))
    }))
]


export const allBoxes: BoxData[] = sections.flatMap(section => section.boxes)