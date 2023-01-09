//cadena de texto con tu nombre

let nombre = "Santiago";

//cadena de texto con tu apellido

let apellido = "Gil";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre + " " + apellido;

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase;

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase;

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let estudianteLength = estudiante.length;

//Una variable que contenga la primera letra del Nombre

let firstLetterNombre = nombre[0];
console.log(firstLetterNombre);

//Otra variable que contenga la última letra del Apellido

let lastLetterApellido = apellido[apellido.length-1];
console.log(lastLetterApellido);

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudianteWithoutSpaces = estudiante.replace(/\s/g,'');
console.log(estudianteWithoutSpaces);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let booleanNombre = estudiante.includes(nombre);
console.log(booleanNombre);