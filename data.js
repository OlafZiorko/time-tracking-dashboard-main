const currentData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

/* hooks */
let innerGrid = document.querySelector(".inner__grid");
let userTimeSelect = `daily`;
let btns = document.querySelectorAll(".btn");
let prev;
window.addEventListener("DOMContentLoaded", () => {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let changeDate = e.currentTarget.textContent.toLocaleLowerCase();
      innerGrid.innerHTML = ``;
      sortDate(currentData, changeDate);
    });
  });

  function sortDate(data, userTimeSelect) {
    data.forEach((item) => {
      let timeSet = item.timeframes.daily.current;
      let prev = item.timeframes.weekly.previous;
      if (userTimeSelect == "daily") {
        timeSet = item.timeframes.daily.current;
        prev = item.timeframes.daily.previous;
      } else if (userTimeSelect == "monthly") {
        timeSet = item.timeframes.monthly.current;
        prev = item.timeframes.monthly.previous;
      } else if (userTimeSelect == "weekly") {
        timeSet = item.timeframes.weekly.current;
        prev = item.timeframes.weekly.previous;
      }

      innerGrid.innerHTML += `<div class="container ${item.title.toLocaleLowerCase()}">
        <div class="inner__container">
          <header class="container__header">
            <h2 class="container title">${item.title}</h2>
            <img class="container--image"src="./images/icon-ellipsis.svg" alt="" />
          </header>
          <section class="bottom__section">
          <div class="time__container">
            <span class="time">${timeSet}hrs</span>
          </div>
          <div class="prev__time">
            <p class="prev">Last Week - ${prev}hrs</p>
          </div>
          </section>
        </div>
      </div>
    `;
    });
  }

  sortDate(currentData, userTimeSelect);
});
