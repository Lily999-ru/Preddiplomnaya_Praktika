document.addEventListener("DOMContentLoaded", function () {

  const titleInput = document.getElementById("manual_title");
  const textArea = document.getElementById("manual_text");
  const titleWarning = document.getElementById("title_warning");
  const textWarning = document.getElementById("warning_text");
  const btn = document.getElementById("btn-submit");
  const charCount = document.getElementById("char_count");

  // Минимальные требования
  const MIN_TITLE = 10;
  const MIN_TEXT = 200;

  // Флаг: пытался ли пользователь отправить форму
  let attemptedSubmit = false;

  // Обновление состояния полей
  function updateState() {
    const titleLen = titleInput.value.trim().length;
    const textLen = textArea.value.trim().length;

    // обновляем счётчик
    charCount.textContent = textLen;

    // Снимаем красную рамку и предупреждения, если юзер ещё ничего не отправлял
    if (!attemptedSubmit) {
      titleInput.classList.remove("error-field");
      textArea.classList.remove("error-field");
      titleWarning.classList.add("hidden");
      textWarning.classList.add("hidden");
    }

    // Проверка возможности активации кнопки
    if (titleLen >= MIN_TITLE && textLen >= MIN_TEXT) {
      btn.disabled = false;
      btn.classList.add("btn-active");
      btn.classList.remove("btn-disabled");
    } else {
      btn.disabled = true;
      btn.classList.remove("btn-active");
      btn.classList.add("btn-disabled");
    }
  }

  // Обработчик отправки формы
  function validateBeforeSubmit(event) {
    const titleLen = titleInput.value.trim().length;
    const textLen = textArea.value.trim().length;

    // теперь мы считаем, что пользователь попробовал отправить форму
    attemptedSubmit = true;

    let valid = true;

    // проверка заголовка
    if (titleLen < MIN_TITLE) {
      titleInput.classList.add("error-field");
      titleWarning.textContent = "Введите заголовок (минимум " + MIN_TITLE + " символов).";
      titleWarning.classList.remove("hidden");
      valid = false;
    } else {
      titleInput.classList.remove("error-field");
      titleWarning.classList.add("hidden");
    }

    // проверка текста статьи
    if (textLen < MIN_TEXT) {
      textArea.classList.add("error-field");
      textWarning.textContent = "Введите текст статьи (минимум " + MIN_TEXT + " символов).";
      textWarning.classList.remove("hidden");
      valid = false;
    } else {
      textArea.classList.remove("error-field");
      textWarning.classList.add("hidden");
    }

    // Останавливаем отправку формы если есть ошибки
    if (!valid) {
      event.preventDefault();
    }
  }

  // Слушатели
  titleInput.addEventListener("input", updateState);
  textArea.addEventListener("input", updateState);

  // Перехватываем отправку формы
  const form = document.querySelector("form");
  form.addEventListener("submit", validateBeforeSubmit);

  // Первичное состояние
  updateState();
});
