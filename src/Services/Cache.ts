export function setCache(key: string, value?: object | string): void {
  if (typeof window !== 'undefined') {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }
}

export function getCache(key: string): any {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}
