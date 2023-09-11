import { initialState, setTodolistAC, todolistsReducer} from "./todolists-reducer";


test('todolists should be set to the state', () => {
    const action = setTodolistAC(initialState)
    const endState = todolistsReducer([], action)

    expect(endState.length).toBe(2)
})