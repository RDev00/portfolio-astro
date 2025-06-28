const langs = [];

function newObject (title?: string, description?:string, img?:string){
	const object = {
		"title": title,
		"description": description,
		"img": img
	}

	langs.push(object);
}

newObject("HTML-5",
"HTML es un lenguaje que permite al programador crear interfaces de usuario con etiquetas con propiedades, las cuales son intuitivas.",
"https://imgs.search.brave.com/tXyPN0HJ0gg-hTFCSvQhmIXbpa2HNw8FzP7AoI1s7cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgwL0hUTUw1X2xv/Z29fcmVzaXplZC5z/dmc");
newObject("CSS",
"CSS es un lenguaje que permite al programador crear aspectos en la interfaz del usuario, va de la mano con HTML, pues este lenguaje se basa en este para poder funcionar.",
"https://imgs.search.brave.com/-JhIc0G42LI0w6mdOh3o3AhshcTZ2E4cdD3M-ILki2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M1L2Yy/LzY1L2M1ZjI2NTk4/ZDA3ZmZhYjAwOTAw/OWNjMTM0YTZhNzk1/LmpwZw");
newObject("JavaScript",
"JavaScript es un lenguaje que brinda la logica con funciones de la pagina web, y permite al usuario interactuar con esta misma.",
"https://imgs.search.brave.com/MBa2DUYxfNmPfckU4KfOP1mui9pBWQggsglZZ8wDeSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc");
newObject("TypeScript",
"TypeScript es un pseudolenguaje que aparte de tener la misma sintaxis que JavaScript, este permite el tipado dentro del codigo, haciendolo mas legible y menos propenso a recibir bugs.",
"https://imgs.search.brave.com/b1mza9u8ePJdo9VHfx00bmjzGwVI_b7cLPA1ONSjIL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw");
newObject("PHP",
"PHP es un lenguaje con una sintaxis parecida a JavaScript pero mas sencilla la cual, funciona muy bien con la base de datos MySQL, teniendo buena sincronia entre si.",
"https://imgs.search.brave.com/FOlc7xh_6alK8oEXcC2eN6M4WExZn7-yi4okNPq9hmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBocC1sb2dvLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1icmFuZC1k/ZXZlbG9wbWVudC10/b29scy1wYWNrLWxv/Z29zLWljb25zLTIy/NjA0My5wbmc_Zj13/ZWJwJnc9MjU2");
newObject("MySQL",
"MySQL es un lenguaje de bases de datos, el cual como su nombre lo indica, funciona con SQL, por lo que se basa en tablas.",
"https://imgs.search.brave.com/CnslUfsK0qtHZGqRQpKO0tyHbXI8avmYXCiQydzynNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NeVNRTC9N/eVNRTC1Mb2dvLndp/bmUuc3Zn");
newObject("PostgreSQL",
"PostgreSQL como MySQL es un lenguaje de bases de datos que funciona con tablas, tambien funcionando con SQL y teniendo un poco mas de funciones que MySQL.",
"https://imgs.search.brave.com/hc-hW0o19m1xwJvKkwdYgh4lA-ddMyNTxvzU8FypmK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNkY2M5N2UxMDY3/MzRlMWNlMjAwYTku/cG5n");
newObject("Git",
"Git es un lenguaje que permite al programador subir sus proyectos en linea de manera gratuita, este se basa en repositorios y ramas para la organizacion de proyectos dentro de este mismo.",
"https://imgs.search.brave.com/cIQwNbX-VS5Sliv2y6WyUT5PLHxl45dQzlRDJ1sC-sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdC1sb2dvLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1icmFuZC1k/ZXZlbG9wbWVudC10/b29scy1wYWNrLWxv/Z29zLWljb25zLTIy/NTk5Ni5wbmc_Zj13/ZWJwJnc9MjU2");

export default langs;