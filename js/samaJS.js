

let hauteur = 100;


function augmente_la_taille_de_10_px(){

	hauteur += 10;

	if (hauteur <= 300) {
		document.getElementById('div_a_modifier').style.height = hauteur+"px";
	}
	else{
		document.getElementById('div_a_modifier').style.height = 100+"px";
	}

	
 }

 function mettre_le_rectangle_en_vert(couleur){
 	document.getElementById('div_a_modifier').style.background = couleur;
 }
	
function remet_les_couleurs_initiales(couleur_initial){
	document.getElementById('div_a_modifier').style.background = couleur_initial;
}

function fait_disparaitre_le_rectangle() {
 	document.getElementById('div_a_modifier').style.height = 0+"px";
 	document.getElementById('div_a_modifier').style.width = 0+"px";
}

function reaparaitre_le_rectangle(){
	document.getElementById('div_a_modifier').style.background = 'blue';
 	document.getElementById('div_a_modifier').style.height = 100+"px";
 	document.getElementById('div_a_modifier').style.width = 100+"px";
}

