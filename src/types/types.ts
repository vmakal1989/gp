
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
    id: null | string
    firstName: null | string
    lastName: null | string
    email: null | string
    role: null | string
}