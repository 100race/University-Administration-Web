/**
 *  board/write.jsp
 */

$("button[type='submit']").click(function(e){
	e.preventDefault();
	
	let sort=$("select[name='b_sort']").val();
	let title=$("#b_title").val();
	//let content=$("textarea[name='b_content']").val();
	let content=CKEDITOR.instances.b_content.getData();
	console.log(content);
	
	if(sort==""){
		alert("분류를 선택해 주세요");
		$("#b_sort").focus();
		return;
	}
	if(title==""){
		alert("제목을 작성해 주세요");
		$("#b_title").focus();
		return;
	}
 	if(content==""){
		alert("내용을 작성해 주세요");
		$(".ckeditor").focus();
		return;
	}
	
	var form=$("#write_board");

	
	form.submit();
	
	})