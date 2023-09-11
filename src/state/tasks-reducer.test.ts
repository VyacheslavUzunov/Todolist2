import {initialState, setTodolistAC} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

test('empty arrays should be added when we set todolist', ()=>{
    const action = setTodolistAC(
        [
            {id: '1', title: "title 1", filter: 'all', order: 0, addedDate: ''},
            {id: '2', title: "title 2", filter: 'all', order: 0, addedDate: ''}
        ]
    )

    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState['1']).toStrictEqual([])
    expect(endState['2']).toStrictEqual([])
})