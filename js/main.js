$("select").on("change", function () {
    let section = $('select option:selected').val();
    $('.loading').append('LOADING');
    $.getJSON("https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt",
        function () {
            $('.loading').append('success')
        })
        .done(function (data) {
            const description = data.results[0].abstract
            console.log(data)

            const articleImage = data.results[0].multimedia[3].url
            console.log(articleImage)

            const articleLink = data.results[0].url
            console.log(articleLink)

            for (data)

        })
        .fail(function () {
            $('.repo-list').append('<li>' + 'NOPE' + '</li>');
        })


})
