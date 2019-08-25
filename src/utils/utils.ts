import { Action } from '../types/global'

/**
 * Will copy keys names as their values for actions object.
 * @param {Action} actions (constant) object.
 */
export const copyActionKeysToValues = (actions: Action): void => {
  Object.keys(actions).forEach((key) => {
    actions[key] = key
  })
}
