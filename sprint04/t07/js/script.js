let user = {
  name: document.getElementById('name').value,
  age: document.getElementById('age').value,
  email: document.getElementById('email').value
};

// Don't edit above this line

let regExpName = /\s[a-zA-Z]/
let regExpName1 = /^[a-zA-Z]/
let regExpAge = /^[1-9][0-9]*$/
let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
let ageBefore = user.age
let emailBefore = user.email

user = new Proxy(user, {
  get(target, property) {
    if (property in target) {
      target.name = target.name.trim().toLowerCase().replace(regExpName, m => m.toUpperCase()).replace(regExpName1, m => m.toUpperCase());
      if (target.age.search(regExpAge) == -1) {
        target.age = ageBefore
      }
      if (target.email.search(regEmail) == -1)
        target.email = emailBefore
    }
    return target[property]
  }
})

// Don't edit below this line

function edit(btn) {
  btn.innerHTML = 'save';
  btn.setAttribute('onclick', 'save(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.removeAttribute('disabled');
}

function save(btn) {
  btn.innerHTML = 'edit';
  btn.setAttribute('onclick', 'edit(this)');
  const input = document.getElementById(btn.previousElementSibling.id);
  input.setAttribute('disabled', 'true');
  user[input.id] = document.getElementById(input.id).value;
  document.getElementById(input.id).value = user[input.id];
}