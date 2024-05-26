import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        { id: 1, description: 'Hacer desayuno', done: false},
        { id: 2, description: 'Comer el desayuno', done: true},
        { id: 3, description: 'Codear como un pro', done: true}
    ];

    findAll(): Todo[] {
        return this.todos;
    }
}
