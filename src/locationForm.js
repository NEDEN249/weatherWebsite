function locationForm(){
    const form = document.createElement('form');
    form.id = 'location-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'location-input';
    input.placeholder = 'Enter a location';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'location-submit';
    submit.value = 'Submit';
    form.appendChild(input);
    form.appendChild(submit);
    return form;
}

export { locationForm }