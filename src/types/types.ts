
export interface elementsOfDayType {
    name: string
    number: number | string
    current: boolean
    isHoliday: boolean
    date: string
}

export interface noteType {
    id: number
    user_id: number
    date: string
    time: string
    value: string
}