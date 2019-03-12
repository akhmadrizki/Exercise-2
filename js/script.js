function insert(angka){
	document.form.textview.value = document.form.textview.value+angka; //mengambil nilai pada value + angka didalam insert
}
function answer(){
	var jawaban = document.form.textview.value; //mengambil nilai pada value
		if(jawaban){
			document.form.textview.value = eval(jawaban) //Eval digunakan untuk mengevaluasi ekspresi atau pernyataan JavaScript
	}
}
function deleteAll(){
	document.form.textview.value = ""; //Membuat value kosong untuk menghapus semua angka
}
function backspace(){
	var jawaban = document.form.textview.value; //mengambil nilai pada value
		document.form.textview.value = jawaban.substring(0,jawaban.length-1); //Menghapus jawaban 1 per satu
}