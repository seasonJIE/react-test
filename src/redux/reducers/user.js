import * as types from '../actions_type/userAction_type'

const initState = {
  count: 10,
  list: [
    {
      num: 1
    }, {
      num: 11
    }, {
      num: 13
    }, {
      num: 61
    }, {
      num: 17
    }
  ]
}

export function userinfo(state = initState, action) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        count: state.count + 1
      }
    case types.ADDLIST:
      let newList = []
      newList.push(...state.list)
      newList.push({ num: action.username })
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
}