import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    name: ``,
    done: false,
  },

  addTask(list, formValues) {
    const reminder = this.store.createRecord(`reminder`, formValues);
    reminder.set(`list`, list);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        name: ``,
        done: false,
      });
    });
  },

  destroyList(list) {
    if (window.confirm(`Are you sure you want to destroy this list?`)) {
      list.destroyRecord();
      this.transitionToRoute(`dashboard`);
    }
  },

  markTaskDone(reminder) {
    reminder.toggleProperty(`done`);
    reminder.save();
  },
});
