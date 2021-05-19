$(document).ready(function () {
  console.log("scripts loaded");

  // Get the height of all e.currentTarget.children[2]
  // Store these values
  // Set e.currentTarget.children[2] css height property to 0

  $(".c-fold").click(function (e) {
    console.log(".c-fold clicked");
    console.log("e :", e);
    let active = is_active(e);

    // Determine whether or not .is-active should be removed or added
    if (active) {
      remove_active(e);
    } else {
      add_active(e);
    }
  });
});

// Determine if selected .c-fold children are assigned the .is-active class
function is_active(e) {
  return $(e.currentTarget.children).hasClass("is-active");
}

function remove_active(e) {
  debugger;
  // Remove .is-active from selected .c-fold children
  $(e.currentTarget.children[0]).removeClass("is-active");
  $(e.currentTarget.children[1]).removeClass("is-active");
  $(e.currentTarget.children[2]).removeClass("is-active");
}

function add_active(e) {
  // Add .is-active from selected .c-fold children
  $(e.currentTarget.children[0]).addClass("is-active");
  $(e.currentTarget.children[1]).addClass("is-active");
  $(e.currentTarget.children[2]).addClass("is-active");
}
