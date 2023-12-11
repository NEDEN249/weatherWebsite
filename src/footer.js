function footer(container){
    const footer = document.createElement('div');
    footer.id = 'footer';
    const me = document.createElement('a');
    me.id = 'me';
    me.textContent = 'Made by: Nathan Eden';
    me.href = 'https://github.com/NEDEN249';
    footer.appendChild(me);
    container.appendChild(footer);
}

export { footer }