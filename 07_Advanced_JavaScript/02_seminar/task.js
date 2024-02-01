const ul = document.querySelector('.list');
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const div = document.querySelector('.div');


function addToList(){
    div.textContent = '';
    try{
        if (input.value.length < 3 || input.value.length > 10){
            throw new Error ('Or too short or too long');
        }
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    } catch (error){
        div.textContent = error.message;

    }
    finally{
        console.log("We finished");
    }
}
btn.addEventListener('click', addToList);
<input type="text"  id="input">
    <button className="btn">Enter</button>
    <ul className="list">
        <div className="div"></div>