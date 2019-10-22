(function() {
    var BlogFeed = PlatformElement.extend({
        initialize: function() {
            var url = this.settings.get('url');
            var nPosts = this.settings.get('nPosts');

            // https://github.com/sdepold/jquery-rss
            // TODO other options

            $.when(
                $.getScript(this.assets_path + 'moment.min.js'),
                $.getScript(this.assets_path + 'jquery.rss.min.js')
            ).done(function() {
                $('.blog-feed').rss(url, {
                    limit: nPosts,
                    ssl: true,
                    support: false,
                    host: 'vast-plateau-87785.herokuapp.com/',
                    layoutTemplate: "<div class='feed-container'>{entries}</div>",
                    entryTemplate: '<div class="paragraph"><a href="{url}"><strong>{title}</strong></a><br/><small>{date}</small><br/>{shortBodyPlain}...</div>',
                    dateFormat: 'MMMM D, YYYY'
                });
            }.bind(this));
        }
    });

    return BlogFeed;
}) ();