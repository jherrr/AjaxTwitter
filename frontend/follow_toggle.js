

var FollowToggle = function(el) {
  this.userId = $(el).attr("data-user-id");
  this.followState = $(el).attr("data-initial-follow-state");
  this.$el = $(el);
  this.render();
  $(this.$el).on('click', this.handleClick.bind(this));
};

FollowToggle.prototype.render = function() {
  if (this.followState === "following" || this.followState === "unfollowing") {
    this.$el.attr("disabled", true);
  } else {
    this.$el.attr("disabled", false);
  }

  if (this.followState === "unfollowed") {
    this.$el.text("Follow!");
  } else if (this.followState === "followed") {
    this.$el.text("Unfollow!");
  }
};

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();

  if (this.followState === "followed") {
    this.followState = "unfollowing";
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
  }

  this.render();

  var type = this.followState === "unfollowing" ? "DELETE" : "POST";
  var url = "/users/" + this.userId + "/follow";

  $.ajax({
    url: url,
    type: type,
    dataType: "json",
    data: {},
    success: function(resp) {
      if (this.followState === "unfollowing" ) {
        this.followState = "unfollowed";
      } else if (this.followState === "following") {
        this.followState = "followed";
      }
      this.render();
    }.bind(this),
    error: function(resp) {
      console.log("it doesn't work!");
    }
  });


  this.render();
};



module.exports = FollowToggle;
