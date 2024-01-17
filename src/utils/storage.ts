/**
 * 存储localStorage
 */
export const setStore = (name: string, content: string) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
    if (!name) return
    return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
    if (!name) return
    window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 */
export const setSession = (name: string, content: string) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
}

/**
 * 获取sessionStorage
 */
export const getSession = (name: string) => {
    if (!name) return
    const data = window.sessionStorage.getItem(name)
    if (data) {
        return JSON.parse(data)
    }
    return null
}

/**
 * 删除sessionStorage
 */
export const removeSession = (name: string) => {
    if (!name) return
    window.sessionStorage.removeItem(name)
}

