var embedPDF = function(pdf) {
	var url = pdf.url;
	var id = (pdf.id === undefined ? 0 : pdf.id);
	var width = (pdf.width === undefined ? '100%' : pdf.width);
	var height = (pdf.height === undefined ? '588px' : pdf.height);
	id = 'embeded-pdf-container' + id;

	document.write('<style>.pdfobject-container { width: '+width+'; height: '+height+' }</style>');
	document.write('<div style="margin-bottom: 88px" id="'+id+'">');
	//document.write('<p>PLEASE ALLOW YOUR BROWSER TO LOAD UNSAFE SCRIPTS IF YOU CANNOT SEE A PDF DOCUMENT.</p>');
	document.write('</div>');
	document.write('<script src="../../js/pdfobject.min.js"></script>');
	document.write('<script>');
	document.write('var options = { pdfOpenParams: { toolbar: \'1\', navpanes: \'1\' } };');
	document.write('try { PDFObject.embed("'+url+'", "#'+id+'", options); } catch(e) { alert(\'PLEASE ALLOW YOUR BROWSER TO LOAD UNSAFE SCRIPTS IF YOU CANNOT SEE A PDF DOCUMENT.\'); }');
	document.write('</script>');
};

