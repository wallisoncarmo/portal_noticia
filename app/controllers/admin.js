module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render("admin/form_add_noticia");
}

module.exports.noticias_salvar = function(application, req, res){
	
	var noticia = req.body;

	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter de 10 a 100 caracter').len(10,100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é um obrigatório').notEmpty().isDate();
	req.assert('noticia','Doticia é um obrigatório').notEmpty();

	var erros =	req.validationErrors();

	if(erros){
		res.render("admin/form_add_noticia",{validacao:erros, noticia:noticia});
		return;
	}

	var connection= application.config.dbConnection();
	var noticiasModel= new application.app.models.NoticiasDao(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect("/noticias");
	});
}