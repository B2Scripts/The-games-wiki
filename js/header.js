document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <div class="header">
      <a href="./index.html">HOME</a>
      <a href="./rank your games.html">RANKING GAME</a>
      <a href="find.html">FIND A GAME</a>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
