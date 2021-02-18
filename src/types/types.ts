
export interface ElementsOfDayType {
    name: string
    number: number | string
    current: boolean
    isHoliday: boolean
    date: string
}

export interface NoteType {
    id: string
    userId: string | null
    date: string
    time: string
    value: string
}

export interface UserType {
    id: string | null
    firstName: string
    lastName: string
    email: string
    role: string
}