$(document).ready( function() {
$("#eventmanagement_table").DataTable();
    //Save the form
    $("#btnsubmit").click(function(){
        var title = $('#title').val();
        var description = $('#description').val();
        var location = $('#location').val();
        var datetimepicker1 = $('#datetimepicker1').val();
        var datetimepicker2 = $('#datetimepicker2').val();
        var imgInp = $('#imgInp').val();
        var e = document.getElementById("category");
        var category = e.options[e.selectedIndex].value;
        var published = $('#published').is(':checked')
        $.ajax(
        {
            url:'/create_eventmanagement/',
            type : 'POST',
            data:{"title":title,
            "description":description,
            "location":location,
            "datetimepicker1":datetimepicker1,
            "datetimepicker2":datetimepicker2 ,
            "imgInp":imgInp,
            "category":category,
            "published":published,
            csrfmiddlewaretoken:$("input[name=csrfmiddlewaretoken]").val()},
            timeout : 10000,
            async:false,
        }).done(function(json_data)
        {
        alert("Saved Successfully.")
        });
    });
    
    //Cancel the form
    $("#btncancel").click(function(){
        alert("Cancelled Successfully.");
    });
        //Image upload displaying the frame
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		}); 	
	});
