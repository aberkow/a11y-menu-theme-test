// main js file. ES6 will be turned into ES5 via the gulp task.


document.addEventListener('DOMContentLoaded', () => {
  const mainMenu = document.getElementById('main-menu');
  
  const navigation = new Navigation();
  // console.log('hello world');
  navigation.init(mainMenu)
})