let text_height = [];

$(document).ready(function () {
  console.log("scripts loaded");
  // Get the height of all .c-fold__text elements
  // Store these values in an array
  // Add data attribute used to ref text_height index
  // Set height to 0
  $(".c-fold__text").each(function (index) {
    text_height.push($(this).height());
    $(this).attr("data-fold", index);
    $(this).height(0);
  });

  $(".c-fold").click(function (e) {
    console.log(".c-fold clicked");
    console.log("e :", e);
    let active = is_active(e);

    // Determine whether or not .is-active should be removed or added
    if (active) {
      remove_active(e);
      remove_height(e);
    } else {
      add_active(e);
      add_height(e);
    }
  });
});

// Set css height property to its original value
function add_height(e) {
  // Store the index value of the selected .c-fold__text
  let current_index = $(e.currentTarget.children[2]).attr("data-fold");
  $(e.currentTarget.children[2]).height(text_height[current_index]);
}

// Set css height property to 0
function remove_height(e) {
  // Store the index value of the selected .c-fold__text
  let current_index = $(e.currentTarget.children[2]).attr("data-fold");
  $(e.currentTarget.children[2]).height(0);
}

// Determine if selected .c-fold children are assigned the .is-active class
function is_active(e) {
  return $(e.currentTarget.children).hasClass("is-active");
}

// Remove .is-active from selected .c-fold children
function remove_active(e) {
  $(e.currentTarget.children[0]).removeClass("is-active");
  $(e.currentTarget.children[1]).removeClass("is-active");
  $(e.currentTarget.children[2]).removeClass("is-active");
}

// Add .is-active from selected .c-fold children
function add_active(e) {
  $(e.currentTarget.children[0]).addClass("is-active");
  $(e.currentTarget.children[1]).addClass("is-active");
  $(e.currentTarget.children[2]).addClass("is-active");
}
