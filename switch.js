var themes = {
    "default": "https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    "amelia" : "//bootswatch.com/3/amelia/bootstrap.min.css",
    "cerulean" : "//bootswatch.com/3/cerulean/bootstrap.min.css",
    "cosmo" : "//bbootswatch.com/3/cosmo/bootstrap.min.css",
    "cyborg" : "//bootswatch.com/3/cyborg/bootstrap.min.css",
    "flatly" : "//bootswatch.com/3/flatly/bootstrap.min.css",
    "journal" : "//bootswatch.com/3/journal/bootstrap.min.css",
    "readable" : "//bootswatch.com/3/readable/bootstrap.min.css",
    "simplex" : "//bootswatch.com/3/simplex/bootstrap.min.css",
    "slate" : "//bootswatch.com/3/slate/bootstrap.min.css",
    "spacelab" : "//bootswatch.com/3/spacelab/bootstrap.min.css",
    "united" : "//bootswatch.com/3/united/bootstrap.min.css"
}
$(function(){
   var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')]; 
        themesheet.attr('href',themeurl);
    });
});
