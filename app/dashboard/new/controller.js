import Ember from 'ember';

export default Ember.Controller.extend({
  saveList(formValues) {
    const list = this.store.createRecord(`list`, formValues);

    list.save().then(() => {
      this.transitionToRoute(`dashboard.list-view`, list.id);
    });
  },
});
