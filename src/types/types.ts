
export interface elementsOfDayType {
    name: string
    number: number | string
    current: boolean
    isHoliday: boolean
    date: string
}

export interface noteType {
    id: string
    userId: string
    date: string
    time: string
    value: string
}