// random color elements function
function randomColor() {
    function random(number) {
      return Math.floor(Math.random() * (number));
    }
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  }
  
  export default randomColor;