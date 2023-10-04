// const para = document.createElement("p");
// document.body.appendChild(para);
// console.log(para);

// setInterval(function () {
//   const birthDora = moment("2112-9-3");
//   const birthDiff = birthDora.diff(moment());
//   const duration = moment.duration(birthDiff);
//   console.log(birthDiff);

//   const years = Math.floor(duration.asYears());
//   const months = duration.months();
//   const days = duration.days();
//   const hours = duration.hours();
//   const minutes = duration.minutes();
//   const seconds = duration.seconds();
//   console.log(
//     `${years}年${months}ヶ月${days}日${hours}時${minutes}分${seconds}秒`
//   );
//   para.textContent = `ドラえもん生誕まであと${years}年${months}ヶ月${days}日と${hours}時間${minutes}分${seconds}秒`;
// }, 1000);

const searchBtn = document.getElementById("dateSearch");
const diffTimeViewer = document.getElementById("diffTime");

searchBtn.addEventListener("click", function () {
  const dateSet = document.getElementById("dateSet").value;
  let timerId = setInterval(function () {
    const daysUntil = moment(dateSet).diff(moment());
    const duration = moment.duration(daysUntil);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    console.count();
    diffTimeViewer.textContent = `${dateSet}まであと${days}日と${hours}時間${minutes}分${seconds}秒`;
  }, 1000);
  // if (dblclick) {
  //   clearInterval(timerId);
  // }
});

// ひとつ前のsetIntervalの処理を止める
