const { authReducer } = require("../../auth/authReducer")
const { types } = require("../../types/types")


describe('Pruebas en authReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged:false}, {})
        expect(state).toEqual({logged:false})
    })
    test('debe de autenticar y colocar el nombre del usuario', () => {
        const action = {
            type: types.login,
            payload:{name:"Miguel"}
        }
        const state = authReducer({}, action)
        expect(state).toEqual({
            name: action.payload.name,
            logged: true
        })
    })  
    test('debe de borrar el name y el logged en false', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({}, action)
        expect(state).toEqual({
            logged: false
        })
    })
})
