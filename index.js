const btn = document.getElementById("btn");
btn.addEventListener("click",insertar);

function insertar()
{
    const nombre = String(document.getElementById("nombre").value);
    const resultado = document.getElementById("resultado");

    resultado.innerText= "Bienvenidx: " + nombre;
}