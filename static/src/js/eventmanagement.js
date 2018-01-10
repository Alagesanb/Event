
function eventmanagement_create_function(){
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
        eventmanagement_cancel_function();
        });
}

function eventmanagement_cancel_function()
{
    $('#title').val('');
    $('#description').val('');
    $('#location').val('');
    $('#datetimepicker1').val('');
    $('#datetimepicker2').val('');
    $('#imgInp').val('');
    $('#category').val('');
    $('#published').val('');
    
}

$(document).ready( function() {
$("#eventmanagement_table").DataTable();
    //Save the form
    $("#btnsubmit").click(function(){
        eventmanagement_create_function();
    });
    
    //Cancel the form
    $("#btncancel").click(function(){
        eventmanagement_cancel_function();
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
