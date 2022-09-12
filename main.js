$(document).ready(function () {
  $("ul").click(function () {
    $("li").css("text-decoration", "line-through");
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const descricaoTarefa = $(`#descricao-tarefa`).val();
    const novaTarefa = $(
      `<li style="display: list-item">${descricaoTarefa}</li>`
    );
    $(novaTarefa).appendTo(`ul  `);
    $(`#descricao-tarefa`).val("");
  });
});
