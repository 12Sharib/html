const lists = document.querySelectorAll('.list')
const listItem = document.querySelectorAll('.list-item')

let draggedItem = null;

for(let i=0;i<listItem.length;i++){
    const item = listItem[i]

    item.addEventListener('dragstart',function(){
        draggedItem =item;
        setTimeout(function(){
        item.style.display = 'none'
        },0)
    })
    item.addEventListener('dragend',function(){
        setTimeout(function(){
            draggedItem.style.display = 'block'
            draggedItem = null
        },0)
    })
    for(let j=0;j<lists.length;j++){
        const list = lists[j]

        list.addEventListener('dragover',function(e){
            e.preventDefault();
        })

        list.addEventListener('dragenter',function(e){
            e.preventDefault();
            this.style.backgroundColor='rgba(0,0,0,0.3)';
            this.style.width = 'max-width'
            this.style.filter = 'saturation("120%") contrast("120%") '
            
        })

        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor = 'rgba(0,0,0,0.2';
        })

        list.addEventListener('drop',function(e){
            console.log('drop')
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0,0,0,0.1';
            this.style.width = 'max-width'
        })
    } 
}
    
