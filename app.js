$(document).ready(function() {
	$("body a").on("click", function(){
		var href = $(this).attr("href");
        window.location.hash = href;
		return false;
	});
    
	$(window).bind("hashchange", function(e) {
        render(decodeURI(window.location.hash));
	});
});


function render(hash) {
    var elements = hash.split("/"),
        app      = $("#application");
    var routes = {
        "": function() {
            app.html("no path");
            
        },
        "home": function() {
            app.html("home path");
        },
        "projects": function() {
            app.html("projects path");
        },
        "repositories": function() {
            app.html("repositories path");
        }
    };
    if(elements.length > 1 && routes[elements[1]]) {
        routes[elements[1]]();
    } else {
        renderErrorPage(hash);
    }
}


function renderErrorPage(hash){
    var page = $('#error');
    page.html("<p>Error with path: " + hash + "</p>");
}


$(document).ready(function() {	
	if(window.location.hash === "") {
		window.location.hash = "/home";
	} else {
		$(window).trigger("hashchange");
	}
});
