const cargarPost = document.querySelector('#cargar');
cargarPost.addEventListener('click', cargarAPI);
function cargarAPI(){
    const xhr = new XMLHttpRequest();
    xhr.open ('GET', 'https://jsonplaceholder.typicode.com/comments',true);
    xhr.onload =  function(){
        if (this.status===200){
            const respuesta = JSON.parse(this.responseText);
            let contenido='';
            respuesta.forEach(
                function(comments){
                    contenido+= `
                        <h3>${comments.name}</h3>
                        <p>${comments.body}</p>
                    `;
                }
            );
            document.getElementById('listado').innerHTML=contenido;
        }
        else {
            console.log('error');
        }
    }
    xhr.send();
}