import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selected() {
      if(confirm('Are you sure about your choice?')) {
        if (confirm !== true) {
          alert("Your vote has been cast!");
      }
    }
    }
  }
});
