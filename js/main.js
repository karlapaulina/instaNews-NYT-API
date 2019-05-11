$( document ).ready(function() {

$("select").on("change", function () {
    let section = $('select option:selected').val();
    $('.loading').append('LOADING');
    $.getJSON("https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt",
        function () {
            $('.loading').append('success')
        })
        .done(function (data) {
            $(".articles").html(" ");
             for(x = 0; x < 12; x++){
                const description = data.results[x].abstract
                const articleImage = data.results[x].multimedia[3].url
                const articleLink = data.results[x].url
              
                $(".articles").append(`<article><a href="${articleLink}"><p>${description}</p><img src="${articleImage}"/></a<></article>`)
    
             }

        })

})

});