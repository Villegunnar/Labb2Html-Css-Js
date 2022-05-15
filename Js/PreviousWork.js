





/*PreviousWork-Button Script */

window.onload = function(){
    document.getElementById('show').addEventListener('click', showfunc);
    document.getElementById('hide').addEventListener('click', hide);
}

function showfunc(){
    console.log('asdasdsadasda')

    const xml = new XMLHttpRequest();
    xml.open('GET', '/Json/work.json', true)
    xml.onload = function(){
        if(this.status === 200){
            const working = JSON.parse(this.responseText);
            let output = '';
            working.forEach(function(Work){
                output += `
                <ul>
                    <li>Företag: ${Work.company}</li>
                    <li>Roll: ${Work.roll}</li>
                    <li>Beskrivning: ${Work.descrption}</li>
                    <br/>
            </ul>
                `;
            });
            document.getElementById('previousWork').innerHTML = output;
            document.getElementById('show').style.display='none';
            document.getElementById('hide').style.display='block';

            
        }
    }
    xml.send();


}


function hide(){
    document.getElementById('previousWork').innerHTML = "";
    document.getElementById('show').style.display='block';
    document.getElementById('hide').style.display='none';

}
/*PreviousWork-Button Script */






