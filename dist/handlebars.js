var template = Handlebars.templates["index"];

//var template2 = Handlebars.templates["index2"];

var data ={};

//var data2={};

Handlebars.registerHelper("linkto", function(url, name){
	var name = Handlebars.Utils.escapeExpression(name),
		url = Handlebars.Utils.escapeExpression(url),
		link = "<a href=\'" + location.protocol + "//" + location.hots + "/" + url + ".html\'>" + name + "</a>"

	return new Handlebars.SafeString(link);
})

/*Handlebars.registerHelper("producto", function(nombre, precio){
	var name = Handlebars.Utils.escapeExpression(nombre),
	var price = Handlebars.Utils.escapeExpression(precio),
	var parrafo = "<p>" + name + price + "</p>"

	return new Handlebars.SafeString(parrafo);
})*/

//var compiladorHTML = compilar(data);
document.getElementById("nav-mobile").innerHTML += template(data);

//document.getElementById("tarjeta").innerHTML += template2(data2);