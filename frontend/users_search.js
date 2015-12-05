
function UsersSearch(el) {
  this.$el = $(el);
  this.$input = $("nav > input");
  this.$ul = $("nav > ul");
  this.$input.on("input", this.handleInput);
}

UsersSearch.prototype.handleInput = function(e) {

  $.ajax({
        url: "/users/search",
        type: "GET",
        dataType: "json",
        data: {query: this.input.val()},
        success: function(resp){
          // this.$messageList.append("<li>" + resp.author + ": " + resp.text +  "</li>");
          // $authorInput.val("");
          // $messageInput.val("");
          // this.loader && this.loader.remove();
        }.bind(this)
      });


};

UsersSearch.prototype.renderResults = function() {

};

module.exports = UsersSearch;
