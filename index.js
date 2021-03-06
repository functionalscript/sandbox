const { todo } = require('functionalscript/dev')

/**
 * @typedef {{
 *  left: TNode|undefined
 *  value: string
 *  right: TNode|undefined
 * }} TNode
 */

/** @type {(old: TNode|undefined) => (value: string) => TNode} */
const insert = old => value => {
  if (old === undefined) { 
    return { 
      left: undefined, 
      value,
      right: undefined,
    }
  }
  if (value < old.value) { 
    const left = insert(old.left)(value)
    if (left === old.left) { return old }
    return { ...old, left }
  }
  if (old.value < value) {
    const right = insert(old.right)(value)
    if (right === old.right) { return old }
    return { ...old, right }
  }
  return old
}

module.exports = {
  /** @readonly */
  insert,
}
