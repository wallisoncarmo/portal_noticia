function NoticiasDao(connection){
	this._connection = connection;
}

NoticiasDao.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by datacriacao desc;',callback);
}

NoticiasDao.prototype.getNoticia= function(id_noticias,callback){
	this._connection.query('select * from noticias where id_noticias='+id_noticias.id_noticias,callback);
}

NoticiasDao.prototype.salvarNoticia= function(noticia, callback){
	this._connection.query('insert into noticias set ?;',noticia, callback);
}	

NoticiasDao.prototype.get5UltimasNoticias= function(callback){
	this._connection.query('select * from noticias order by datacriacao desc limit 5;',callback);
}	




module.exports = function(){


	return NoticiasDao;
}