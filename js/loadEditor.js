function loadEditor(language, fileName){
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/cobalt");
	editor.setValue("jQuery not loading file!\nMake sure you're at http://learn.5th.xyz/");
	$.get("http://learn.5th.xyz/docs/" + fileName , function(data){
		editor.setValue(data);
		editor.getSession().setMode("ace/mode/" + language);
	});
	editor.gotoLine(1);
	editor.setReadOnly(true);
}