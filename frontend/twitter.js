var FollowToggle = require ("./follow_toggle.js");
var UsersSearch = require ("./users_search.js");

function documentReadyCallback() {
  $(".follow-toggle").each( function(_, el) {
    new FollowToggle(el);
  });

  $("nav.users-search").each( function(_, el) {
    new UsersSearch(el);
  });
}

$(documentReadyCallback);
