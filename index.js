/**
 * 移动端弹出框组件
 * 2019/12/19
 */
class Modals {
  constructor(title, content, conCallback, canCallback) {
    //判断参数
    if (typeof title === 'string' && typeof content === 'function') {
      conCallback = content
      content = title
      title = null
    }
    if (typeof title === 'function') {
      conCallback = title
      canCallback = content
      title = null
      content = null
    }

    //初始化template
    this.template = this.createTemplate(title, content)
    this.template
      .querySelector('.confirm')
      .addEventListener('click', this.handler(conCallback))
    this.template
      .querySelector('.cancel')
      .addEventListener('click', this.handler(canCallback))
  }

  createTemplate = (title, content) => {
    let container = document.createElement('div')
    container.className = 'modals'

    let header = title ? "<div class='modals-header'>" + title + '</div>' : ''
    let trunk =
      "<div class='modals-trunk'>" + '<div>' + content + '</div>' + '</div>'
    let footer =
      "<div class='modals-footer'><div class='line'></div><span class='confirm'>确定</span><span class='cancel'>取消</span></div>"
    let wrap = "<div class='modals-wrap'>" + header + trunk + footer + '</div>'
    container.innerHTML = wrap

    return container
  }
  show = () => {
    document.body.appendChild(this.template)
  }
  hide = () => {
    document.body.removeChild(this.template)
  }
  handler = fn => () => {
    this.hide()
    if (typeof fn === 'function') {
      fn()
    }
  }
}

export default Modals
