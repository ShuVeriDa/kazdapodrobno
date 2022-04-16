import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('reducer shoukd change value to opposite value', () => {
   //data
   const state: StateType = {
      collapsed: false
   }

   //action
   const newState = reducer(state, {type: TOGGLE_CONSTANT})

   //expection
   expect(newState.collapsed).toBe(true)

   expect(1).toBe(1)
})

test('collapsed should be false', () => {
   //data
   const state: StateType = {
      collapsed: true
   }

   //action
   const newState = reducer(state, {type: TOGGLE_CONSTANT})

   //expection
   expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
   //data
   const state: StateType = {
      collapsed: true
   }

   //action
   expect(() => {
      reducer(state, {type: 'FAKE'})
   }).toThrowError()

})