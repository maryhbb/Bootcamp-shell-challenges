console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(event.target);

  //   const formElements = event.target.elements;
  //   console.log(formElements);

  //   console.log(formElements.firstName);
  //   console.log(formElements.firstName.value);

  //   console.log(event.target);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const age = data.age;
  const badness = data.badness;

  console.log(age + badness);
  console.log(parseInt(age) + parseInt(badness));
});
