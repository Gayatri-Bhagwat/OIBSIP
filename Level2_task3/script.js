const addFun = function(e)
{
    let newText = document.createElement('div');
    let value = document.querySelector('.input-box').value;
    let newBtn = document.createElement('div');
    let checkBox = document.createElement('input');
    let box = document.createElement('div');


    newText.innerText = value;
    newBtn.innerHTML = ` <i class=" fa fa-trash fa-2x"></i>`;
    checkBox.setAttribute("type","checkbox");
    document.querySelector('div').append(newText,newBtn,checkBox);
    document.querySelector('.container').insertAdjacentElement('beforeend',newText);
    document.querySelector('.container').insertAdjacentElement('beforeend',newBtn);
    document.querySelector('.container').insertAdjacentElement('beforeend',checkBox);
    
    newText.classList.add('newTextClass');
    newBtn.classList.add('newDeleteButton');
    checkBox.classList.add('newCheckBox');

    checkBox.addEventListener('click', function()
    {
        newText.classList.toggle('tickMark');
        
    })

    var Datetime = new Date();
    box.innerText = `  ${Datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    newText.insertAdjacentElement("afterend",box);
    box.classList.add('DateTime');
    newBtn.addEventListener('click', function()
    {
        newBtn.remove();
        newText.remove();
        checkBox.remove();
        box.remove();
        alert(`Deleting "${newText.innerText}" at${box.innerText}!`)
    })
    document.querySelector('.input-box').value = ` `;
}


document.querySelector('.input-box').addEventListener('keypress', function(e)
{
    if(e.key === 'Enter')
    {
    e.preventDefault(); 
    addFun();
    }
})



