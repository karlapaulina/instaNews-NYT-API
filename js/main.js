$( document ).ready(function() {

$("select").on("change", function () {
    let section = $('select option:selected').val();
    $('.loading').append('LOADING');
    $.ajax({
        method: 'GET',
        url: "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt",
        success: function () {
            $("header").animate({marginTop: "40px", marginBottom: "40px"});
            $(".articles").animate({marginBottom: "10%"});
            //$("logo").animate({width: "50%", height: "50%"});
        }
    })
        .done(function (data) {
            $(".articles").html(" ");
             for(x = 0; x < 12; x++){
                const description = data.results[x].abstract
                const articleImage = data.results[x].multimedia[4].url
                const articleLink = data.results[x].url
              
                $(".articles").append(`<article class="articles-created${x}"><a href="${articleLink}"><p>${description}</p></a<></article>`)
                $(`.articles-created${x}`).css("background-image", `url("${articleImage}")`)
                $(`.articles-created${x}`).css("background-size", "cover")
                $(`.articles-created${x}`).css("background-position", "center center")
                $(`.articles-created${x}`).css("min-height", "400px")
                $(`.articles-created${x}`).css("display", "flex")
                $(`.articles-created${x}`).css("align-items", "flex-end")
                $(`.articles-created${x} p`).css("padding-left", "20px")
                /*
                if ()
                */ 

             }

        })
        .fail(function() {
           $(".loading-gif").after(`<h2>There was an error loading the page.</h2>`);
          });
})
});