import * as types from '../actions_type/userAction_type'

export function add() {
  return {type:types.ADD}
}
export function addList(username) {
  return { type:types.ADDLIST, username:username}
}