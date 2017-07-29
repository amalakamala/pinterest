var imprimir = function(e){
	$("#columns").empty();
	var template = "";
	var url = "";
	for(var i = 0; i < Math.ceil(e.length / 4); i++){
		template += "<div class='row'>";
		for (var j = 0; j < 4; j++){
			url = e[4*i + j].url;
			template += '<div class="col s3">';
			template += '<a href="#modal-pokemon" data-enlace=' + e[4*i + j].id + ' class="modal">';
			template += '<article>'
			template += '<img src="dist/img/' + e[4*i + j].name + '>';
			template += '<p>' + e[4*i + j].title;
			template += '</p></article></a></div>'
		}
		template += "</div>"

	}
	$("#columns").append(template);
	$(".modal").click(function(){
		var url = $(this)[0].dataset.enlace;
	});
}





$(document).ready(function() {
	console.log(impimir(json));

	/*
	$('.el-json').append(`
		<div class="contenedor" id="`+e.id+`">
			<img src="dist/img/`+e.image_url+`" alt="">
			<div class="text-contenedor">
				<div class="titulo">
					<h5>`+ e.title +`</h5>
					<span>36,6k</span>
					<span>36,6k</span>
				</div>
				<div class="description">
					<p>`+e.description+`</p>
				</div>
				<div class="user">
					<span>M</span>
					<p>`+e.username+`" #"`+ e.hashtag +`</p>
				</div>
			</div>
		</div>		
	`)

	var llamada = function(){
		json.forEach(function(e){

		})
	}
	*/
});