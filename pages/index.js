const items = document.querySelectorAll('.list-item')
console.log(items)
items.forEach((item)=>{
  item.addEventListener('mousedown',(evt)=>{
    evt.preventDefault;
    removeFocus()
    item.classList.add('list-item_opened')
  })
})
removeFocus =()=>{
  items.forEach((item)=>{
    item.classList.remove('list-item_opened')
  })
}
