let tabla=[{id:"2",nombre:"son",apellido:"goku",direccion:"kamehouse"},
{id:"3",nombre:"son",apellido:"gohan",direccion:"calle 5"},
{id:"4",nombre:"picoro",apellido:"daimaku",direccion:"calle 9"}
]

function cargar(){
	let elemento=document.getElementById("usuarios")
	tablallena=""
	for (let i = 0; i < tabla.length; i++) {
		tablallena+=`<tr><td>${tabla[i].id}</td><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].direccion}</td></tr>`
	}
	elemento.innerHTML=tablallena
}

function comprobar(){
	let id=document.getElementById("id").value

	for (let i = 0; i < tabla.length; i++) {
		if (id==tabla[i].id) {
			return true
		}
	}
}

function registrar(){
	let id=document.getElementById("id").value
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let direccion=document.getElementById("direccion").value


	if (comprobar()==true) {
		alert("Ya se encuentra el usurio resgistrado")
	}else{
		if (!isNaN(id)) {
			if (id && nombre && apellido && direccion) {
				let elemento=document.getElementById("usuarios")
				elemento.innerHTML+=`<tr><td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td></tr>`
				//agregar a la tabla
				let usertabla={id,nombre,apellido,direccion}
				tabla.push(usertabla)
			}else{
				alert("Campos obligatorios")
			}
		}else{
			alert("El id no es de tipo numerico")
		}

	}


	
}