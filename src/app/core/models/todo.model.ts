export type ITodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE';
export type ITodoStatus = ['OPEN','PROGRESS','TESTING','DONE'];
export interface ITodo{
    id?:number;
    title:string;
    description:string;
    status:ITodoType;
    created_at?: string;
    updated_at?:string;
}