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

  destroyTask(task) {
    if (window.confirm(`Are you sure you want to destroy this task?`)) {
      task.destroyRecord();
      this.transitionToRoute(`dashboard`);
    }
  },
});
