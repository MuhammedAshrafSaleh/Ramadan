const navBar = document.querySelector(".nav");
const Bars = document.querySelector(".nav__bars");
const navList = document.querySelector(".nav__list");
const navItem = document.querySelectorAll(".nav__item");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit__btn");
const btn__1 = document.querySelector(".btn-1");
const btn__2 = document.querySelector(".btn-2");
const btn__3 = document.querySelector(".btn-3");
const btn__4 = document.querySelector(".btn-4");
const btn__5 = document.querySelector(".btn-5");
const btn__10 = document.querySelector(".btn-10");
const btn__15 = document.querySelector(".btn-15");
const btn__20 = document.querySelector(".btn-20");
const btn__30 = document.querySelector(".btn-30");

const AllBtns = document.querySelectorAll(".schadule__left .btn");
const schaduleText = document.querySelector(".schadule .ghost__text");

///////////////////////////////////////////////////////
submit.addEventListener("click", function (e) {
    if (!Number.isInteger(+input.value.trim()) || input.value == 0 || input.value == " ") return;
    // Calculate The Number Of Pages
    const days = +input.value;
    const pagesPerDay = Math.ceil(600 / days);
    const pagesPerPrayer = Math.ceil(pagesPerDay / 5);
    // Change The Text Content Of These Fields To The Number That We Created
    btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent = `${pagesPerPrayer} صفحات`;
    console.log(btn__1.textContent);
    // Change Thier Opacity
    Array.prototype.forEach.call(AllBtns, increaseOpacity);
    schaduleText.style.backgroundColor = " #1ebe75";
});

input.addEventListener("focus", () => {
    Array.prototype.forEach.call(AllBtns, decreaseOpacity);
    schaduleText.style.backgroundColor = " #1e221e";
    // btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent = ''
});
const decreaseOpacity = function (btn) {
    btn.style.opacity = 0.7;
};
const increaseOpacity = function (btn) {
    btn.style.opacity = 1;
};

/////////////////////////////////////////////////////////////////////////////////////
btn__10.addEventListener("click", () => {
    btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent =
        "12 صفحات";
    Array.prototype.forEach.call(AllBtns, increaseOpacity);
    schaduleText.style.backgroundColor = "#1ebe75";
});
btn__15.addEventListener("click", () => {
    btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent =
        "8 صفحات";
    Array.prototype.forEach.call(AllBtns, increaseOpacity);
    schaduleText.style.backgroundColor = "#1ebe75";
});
btn__20.addEventListener("click", () => {
    btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent =
        "6 صفحات";
    Array.prototype.forEach.call(AllBtns, increaseOpacity);
    schaduleText.style.backgroundColor = "#1ebe75";
});
btn__30.addEventListener("click", () => {
    btn__1.textContent = btn__2.textContent = btn__3.textContent = btn__4.textContent = btn__5.textContent =
        "4 صفحات";
    Array.prototype.forEach.call(AllBtns, increaseOpacity);
    schaduleText.style.backgroundColor = "#1ebe75";
});
/////////////////////////////////////////////////////////////////////////////////////////////////// Scrolling Effect For Full Screen
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 600) {
        navBar.classList.add("sticky");
        document.querySelector(".ramadan").style.marginTop = "8rem";
    } else {
        navBar.classList.remove("sticky");
        document.querySelector(".ramadan").style.marginTop = "0";
    }

    if (window.innerWidth > 800) {
        if (window.pageYOffset > 200) {
            document.querySelector(".benefits__heading").classList.add("fade__right");
        }
        if (window.pageYOffset > 340) {
            document.querySelector(".benefits--1").classList.add("fade__right");
            document.querySelector(".benefits--2").classList.add("fade__right");
            document.querySelector(".benefits--3").classList.add("fade__up");
            document.querySelector(".benefits--4").classList.add("fade__left");
        }

        if (window.pageYOffset > 430) {
            document.querySelector(".benefits--5").classList.add("fade__left");
        }
        if (window.pageYOffset > 978) {
            document.querySelector(".quran__right").classList.add("fade__up");
        }
        if (window.pageYOffset > 1643) {
            document.querySelector(".quader__heading").classList.add("fade__up");
        }
        if (window.pageYOffset > 1866) {
            document.querySelector(".quader__feature--1").classList.add("fade__up");
            document.querySelector(".quader__feature--2").classList.add("fade__up");
            document.querySelector(".quader__unique").classList.add("fade__up");
        }
        if (window.pageYOffset > 2550) {
            document.querySelector(".schadule__left").classList.add("fade__left");
            document.querySelector(".schadule__right").classList.add("fade__right");
        }
        if (window.pageYOffset > 3213) {
            document.querySelector(".goal__heading").classList.add("fade__left");
        }
        if (window.pageYOffset > 3419) {
            document.querySelector(".goal__left").classList.add("fade__up");
        }
        if (window.pageYOffset > 3422) {
            document.querySelector(".goal__right").classList.add("fade__up");
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////// Scrolling Effect On Small Screen
    if (window.innerWidth < 800) {
        if (window.pageYOffset > 1) {
            document.querySelector(".benefits__heading").classList.add("fade__right");
        }
        if (window.pageYOffset > 10) {
            document.querySelector(".benefits--1").classList.add("fade__up");
            document.querySelector(".benefits--2").classList.add("fade__up");
            document.querySelector(".benefits--3").classList.add("fade__up");
        }
        if (window.pageYOffset > 313) {
            document.querySelector(".benefits--4").classList.add("fade__left");
            document.querySelector(".benefits--5").classList.add("fade__left");
        }
        if (window.pageYOffset > 639) {
            document.querySelector(".quran__right").classList.add("fade__up");
        }
        if (window.pageYOffset > 1130) {
            document.querySelector(".quader__heading").classList.add("fade__up");
        }
        if (window.pageYOffset > 1252) {
            document.querySelector(".quader__feature--1").classList.add("fade__up");
        }

        if (window.pageYOffset > 1413) {
            document.querySelector(".quader__unique").classList.add("fade__left");
        }
        if (window.pageYOffset > 1655) {
            document.querySelector(".quader__feature--2").classList.add("fade__up");
        }
        if (window.pageYOffset > 1859) {
            document.querySelector(".schadule__right").classList.add("fade__left");
        }
        if (window.pageYOffset > 2246) {
            document.querySelector(".schadule__left").classList.add("fade__right");
        }
        if (window.pageYOffset > 2654) {
            document.querySelector(".goal__heading").classList.add("fade__left");
        }
        if (window.pageYOffset > 2810) {
            document.querySelector(".goal__right").classList.add("fade__up");
        }
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hadling Navbar Effect
Bars.addEventListener("click", function (e) {
    navList.classList.toggle("transform");
});
Array.prototype.forEach.call(navItem, function (ele) {
    ele.addEventListener("click", function () {
        navList.classList.toggle("transform");
    });
});
