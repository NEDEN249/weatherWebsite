//this function recieves a div as an argument and emptys the div of it's children
function emptyContainer(div){
    let items = document.getElementById(div);
    let child = items.lastElementChild;
    while (child){
        items.removeChild(child);
        child = items.lastElementChild;
    }
}

export { emptyContainer }