export const debounce = (fn: (...args: never[]) => void, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return function (this: never, ...args: never[]) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
