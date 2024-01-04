// importing css
import "/src/css/style.css";

//~~~~~ UFO ~~~~~//
//~~~~~ UFO ~~~~~//

// grabbing all the necessary stuffs
const foodInputTag = document.getElementById("foodInputTag");
const tipInputTag = document.getElementById("tipInputTag");
const increaseBtn = document.getElementById("increaseBtn");
const showPeopleCount = document.getElementById("showPeopleCount");
const decreaseBtn = document.getElementById("decreaseBtn");
const totalAmount = document.getElementById("totalAmount");
const resetBtn = document.getElementById("resetBtn");
const toastBox = document.getElementById("toastBox");

// grabbing imaginary elements which probably doesn't exists
const meta_theme_tag = document.querySelector(`meta[name="theme-color"]`);
const title_tag = document.querySelector("head title");
const favicon_link_tag = document.querySelector(`link[rel="icon"]`);
const ios_status_bar = document.querySelector(
	`meta[name="apple-mobile-web-app-status-bar-style"]`
);

// importing necessary functions
import { calculateTotal } from "./lib/calculateTotal.js";
import { copyToClipboard } from "./lib/copyToClipboard.js";
import { setCssVariable } from "./lib/setCssVariable.js";

// importing helper functions
import {
	injectMetaThemeTag,
	injectTitle,
	injectFavicon,
	injectIosStatusBar
} from "./lib/injections.js";

// importing constants
import {
	theme_color,
	new_title,
	faviconProps,
	icon_path,
	toast_removal_time,
	errorMessage,
	successMessage
} from "./constants/index.js";

// injeting necessary shits
(() => {
	injectMetaThemeTag(meta_theme_tag, theme_color);
	injectTitle(title_tag, new_title);
	injectFavicon(favicon_link_tag, faviconProps);
	injectIosStatusBar(ios_status_bar, theme_color);
	setCssVariable("--theme-color", theme_color);
	setCssVariable("--toast-disappears-in", `${toast_removal_time}s`);
	// setCssVariable("--inputBg", `#1c1917`);
})();

/*
    ##########################
    / ~~ helper functions ~~ /
    ##########################
*/

const doTheCalculation = () => {
	// same shit again and again...
	// so thats why made it a function
	const bill = Number(foodInputTag.value);
	const tipPercent = Number(tipInputTag.value);
	const { totalBill } = calculateTotal(bill, tipPercent);
	const totalHead = Number(showPeopleCount.innerText);
	totalAmount.innerText = (totalBill / totalHead).toFixed(2);
};

const hardReset = () => {
	foodInputTag.value = null;
	tipInputTag.value = null;
	showPeopleCount.innerText = "1";
	totalAmount.innerText = "0.00";
};

const addToast = (message = "Some Dummy Text") => {
	const toast = document.createElement("div");
	toast.classList.add("toast-item");
	toast.innerText = message;

	toastBox.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, toast_removal_time * 1000);
};

/*
    ################################
    / ~~ main logic starts here ~~ /
    ################################
*/

foodInputTag.addEventListener("keyup", () => {
	// calculate here...
	doTheCalculation();
});

tipInputTag.addEventListener("keyup", () => {
	// calculate here...
	doTheCalculation();
});

increaseBtn.addEventListener("click", () => {
	const now = Number(showPeopleCount.innerText) + 1;
	showPeopleCount.innerText = `${now}`;
	console.log("increase function");

	// calculate here...
	doTheCalculation();
});

decreaseBtn.addEventListener("click", () => {
	if (Number(showPeopleCount.innerText) <= 1) {
		return;
	}

	const now = Number(showPeopleCount.innerText) - 1;
	showPeopleCount.innerText = `${now}`;

	// calculate here...
	doTheCalculation();
});

resetBtn.addEventListener("click", () => {
	hardReset();
});

totalAmount.addEventListener("click", async () => {
	const value = await copyToClipboard(totalAmount);

	if (!value) {
		addToast(errorMessage);
		return;
	}

	addToast(successMessage);
});
