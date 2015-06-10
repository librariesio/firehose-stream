Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };

var evtSource = new EventSource('http://firehose.libraries.io/events');

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

Handlebars.registerHelper ('truncate', function (str, len) {
    if (str.length > len && str.length > 0) {
        var new_str = str + " ";
        new_str = str.substr (0, len);
        new_str = str.substr (0, new_str.lastIndexOf(" "));
        new_str = (new_str.length > 0) ? new_str : str.substr (0, len);

        return new Handlebars.SafeString ( new_str +'...' );
    }
    return str;
});

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

evtSource.addEventListener('pkg', function(evt) {
  var pkg = JSON.parse(evt.data);
  console.debug('pkg:', pkg);
  addToList(pkg);
}, false);

function addToList(pkg) {
  var html    = template(pkg);
  $('#events').prepend(html)
  $('#events .project').slideDown(500)
}

// addToList({platform: 'NPM', name: 'node-sass', version: '1.0.0', platform: {description: 'foo', normalized_licenses: ['MIT']}})
