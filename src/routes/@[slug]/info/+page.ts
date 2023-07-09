import { pb } from '$lib/pocketbase/db.js';

export interface Employee {
    birthday: string
    branch: string[]
    city: string
    collectionId: string
    collectionName: string
    country: string
    created: string
    department: string
    firstname: string
    id: string
    is_active: boolean
    is_employed: false
    lastname: string
    middle_name: string
    personal_email: string
    phone: string
    position: string
    postal_code: string
    province_state: string
    role: string
    street: string
    updated: string
    user: string
}

export interface Position {
    id: string
    name: string
    branch: string[]
}

export interface Department {
    id: string
    name: string
    branch: string[]
}

export const load = async ({ params }) => {
    const employee: Employee = await pb.collection('employee').getFirstListItem(`user.username='${params.slug}'`)

    const position: Position[] = await pb.collection('position').getFullList({ sort: '-created', })
    const department: Department[] = await pb.collection('department').getFullList({ sort: '-created', })


    const bday = new Date(employee.birthday)
    let month = '' + (bday.getMonth() + 1)
    let day = '' + bday.getDate()
    let year = bday.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    employee.birthday = [year, month, day].join('-');

    return { params, pb, employee, position, department };
}