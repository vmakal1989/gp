
export interface ElementsOfDayType {
    name: string
    number: number | string
    current: boolean
    isHoliday: boolean
    date: string
}

export interface noteType {
    id: string
    userId: string | null
    date: string
    time: string
    value: string
}