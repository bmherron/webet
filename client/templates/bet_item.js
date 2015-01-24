Template.betItem.helpers({
  openStatus: function() {
    if (this.status === "open"){
      return true
    }
    else {
      return false
    }
  }
})

Template.betItem.events({
  'click #remove' : function(){
    Bets.remove(this._id)
  },

  'click .accept_button' : function() {
    Bets.update({_id: this._id}, { $set: { status: "pending" }})
  }
})
