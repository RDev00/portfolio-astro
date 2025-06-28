const frameworks = [];

function newObject (title?: string, description?:string, img?:string){
	const object = {
		"title": title,
		"description": description,
		"img": img
	}

	frameworks.push(object);
}

newObject("Astro",
	"Astro es un framework de frontend que sirve para sitios web estaticos, dando optimizacion tanto como para el programador como para el usuario.",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KhCojo9MAD9u7-vbHjYYFzD69By9d-PWcw&s");
newObject("React",
	"React es un framework de frontend que sirve para sitios web dinamicos que el usuario pueda interactuar en tiempo real con la pagina web, teniendo interacciones como likes o chats.",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s");
newObject("ExpressJS",
	"ExpressJS es un framework de backend que sirve para sitios web dinamicos, este se encarga de principalmente de obtener datos de donde se le indiquen, aparte tambien tiene la funcion de poder crear nuestros servidores para paginas web sin framework.",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcmKD370zZ_gDhMVzMYuwJQfG_bndLTG-BQ&s");
newObject("TailwindCSS",
	"TailwindCSS es un framework de frontend para dar clases a los elementos de nuestras paginas web, este busca mas que nada la optimizacion del programador al crear interfaces y agregar la opcion de multiples temas, ahorrando el tiempo que seria agregar un tema, como el modo obscuro.",
	"https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png");

export default frameworks;