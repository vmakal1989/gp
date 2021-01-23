
export interface elementsOfDayType {
    name: string
    number: number | string
    current: boolean
    isHoliday: boolean
    date: string
}

export interface noteType {
    id: number
    date: string | null
    time: string
    value: string
}