//hamburger menu

const toggle_menu = document.getElementById("toggle");
const menu_element = document.getElementById("menu");

let display_menu = false;

document.addEventListener('click', event => {   		
	if(event.target === toggle_menu && !display_menu)
	{	
		menu_element.style = "display: block;";
		display_menu = true;
	}

	else
	{
		menu_element.style = "display: none;";
		display_menu = false;
	}
});