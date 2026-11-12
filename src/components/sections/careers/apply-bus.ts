/**
 * Tiny bridge between the job details sheet and the application form,
 * which live in separate client islands. The sheet asks the form to
 * preselect a position; the form scrolls itself into view.
 */
export const APPLY_EVENT = "curdworks:apply"
export const OPEN_APPLICATION = "open"

export function requestApply(position: string) {
  window.dispatchEvent(new CustomEvent<string>(APPLY_EVENT, { detail: position }))
}
