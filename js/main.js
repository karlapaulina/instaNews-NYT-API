$(document).ready(function () {
    $('select').selectric();

    $('select').on('change', function () {
        let section = $('select option:selected').val();
        $('.loading').append('LOADING');
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt',
            success: function () {
                $('header').animate({ marginTop: '40px', marginBottom: '40px' });
                $('.articles').animate({ marginBottom: '5%' });
                $('.loading-gif').append(`<img src='../assets/images/ajax-loader.gif'/>`)
            }
        })
            .done(function (data) {
                $('.articles').html(' ');
                setTimeout(function () {
                    $('.loading-gif').html(' ');

                    let x = 0
                    for (x = 0; x < 12; x++) {
                        const description = data.results[x].abstract
                        const articleLink = data.results[x].url

                        $('.articles').append(`<article class='articles-created${x}'><a href='${articleLink}'><p class='article-desc'>${description}</p></a></article>`)

                        if (data.results[x].multimedia[4] === undefined) {
                            $(`.articles-created${x}`).css('background-image', `url("../assets/images/default.png")`)
                        } else {
                            const articleImage = data.results[x].multimedia[4].url
                            $(`.articles-created${x}`).css('background-image', `url("${articleImage}")`)
                        }
                        $(`.articles-created${x}`).css('background-size', 'cover')
                        $(`.articles-created${x}`).css('background-position', 'center center')
                        $(`.articles-created${x}`).css('min-height', '400px')
                        $(`.articles-created${x}`).css('display', 'flex')
                        $(`.articles-created${x}`).css('align-items', 'flex-end')
                        $(`.articles-created${x} p`).css('padding-left', '20px')
                    }
                }, 2000);
            })
            .fail(function () {
                $('.loading-gif').append('<h2>There was an error loading the page.</h2>');
            });

    })
});