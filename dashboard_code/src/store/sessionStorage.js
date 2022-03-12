const myStorage = {
  // 存储sessionStorage
  setStorage(name, content) {
    if (!name) return
    if (typeof content === 'object') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  },
  // 获取sessionStorage
  getStorage(name) {
    if (!name) return
    return window.sessionStorage.getItem(name)
  },
  // 删除sessionStorage
  removeStorage(name) {
    if (!name) return
    window.sessionStorage.removeItem(name)
  },
  // 清除所有
  clearStorage() {
    window.sessionStorage.clear()
  }
}
export default myStorage
