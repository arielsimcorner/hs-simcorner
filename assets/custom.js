/// STICK NAVIGATION ///
jQuery(window).scroll(function() {
	var height = $(window).scrollTop();
		if(height  > 150) {
		    jQuery('.site-header').addClass('fixed-top');
		}else{
			jQuery('.site-header').removeClass('fixed-top');
      	}
    });


/// TABS SCRIPT ///
const navEl = document.querySelector("#nav-tab");
const mainEl = document.querySelector("#main-tab");

const STATE = {
  currentTab: null
};

const targetsContainer = document.querySelector(".targets-tab");
const triggers = Array.from(document.querySelectorAll(".trigger-tab"));
const targets = [];
const triggerSpec = document.querySelector(".trigger-spec-tab");
triggerSpec.style.width = `33.3%`;

triggers.forEach((trigger, ind) => {
  targets.push(document.querySelector(trigger.dataset.target));
  trigger.addEventListener("click", () => {
    STATE.currentTab = deactivateTab(STATE.currentTab);
    STATE.currentTab = activateTab(ind);
  });
});

STATE.currentTab = activateTab(0);

function activateTab(ind) {
  if (ind == null) return ind;
  const trigger = triggers[ind];
  trigger.classList.add("active");
  const target = targets[ind];
  target.classList.add("active");
  targetsContainer.style.transform = `translateX(-${ind * 100}%)`;
  triggerSpec.style.transform = `translateX(${ind * 100}%)`;
  return ind;
}

function deactivateTab(ind) {
  if (ind == null) return ind;
  const trigger = triggers[ind];
  trigger.classList.remove("active");
  const target = targets[ind];
  target.classList.remove("active");
  return null;
}