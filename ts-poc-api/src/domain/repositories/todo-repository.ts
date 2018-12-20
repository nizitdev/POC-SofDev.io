import { Todo } from "../aggregates/todo/todo";


export interface TodoRepository
{
    getAll(): Promise<ReadonlyArray<Todo>>;
    get(id: string): Promise<Todo>;
    save(todo: Todo): Promise<void>;
    delete(id: string): Promise<void>;
}