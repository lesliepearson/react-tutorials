var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  TODO_CREATE: null,
  TODO_COMPLETE: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UNDO_COMPLETE: null,
  TODO_UPDATE_TEXT: null

  // TODO_ADD: null,         // Adds option to list
  // TODO_COMPLETE: null,    // Removes option from list
  // TODO_VISIBLE: null,     // Shows or hides the list
  // COMPLETE_ADD: null,     // Adds completed item Completed List
  // COMPLETE_REMOVE: null,  // Remove completed item from Completed List
  // COMPLETE_VISIBLE: null, // Shows or hides the Completed List
  // SET_SELECTED: null,     // Selects a to do option
  // RECEIVE_OPTIONS: null   // Loads our mock data
});
