window.addEventListener('load', function() {
    var h = document.querySelector('h1');
    h.classList.add('heading');
});

window.addEventListener('dblclick', function(){
    alert(new Date());
});


document.getElementById('toggle').addEventListener('change', function(){
    if (this.checked){
        document.getElementById('emailBox').classList.remove('hidden');
    }
    else
    {
        document.getElementById('emailBox').classList.add('hidden');
    }
});
