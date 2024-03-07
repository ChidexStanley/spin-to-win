// Function to spin the wheel
function spinWheel() {
  const wheel = document.querySelector(".spinner");
  // const result = document.getElementById('result');

  // Generate a random angle for spinning
  const randomAngle = Math.floor(Math.random() * 360) + 1;
  console.log(randomAngle);
  // Apply spinning animation
  wheel.style.transition = 'transform 6s cubic-bezier(0,1.32,.55,.64)';
  wheel.style.transform = `rotate(${randomAngle}deg)`;

  // Determine the prize based on the angle
  setTimeout(() => {
    const angle = randomAngle;
    var prize = '';

    if (angle >= 0 && angle < 45) {
      prize = '300MB';
    } else if (angle >= 45 && angle < 90) {
      prize = '100MB';
    } else if (angle >= 90 && angle < 125) {
      prize = '300MB';
    } else if (angle >= 125 && angle < 180) {
      prize = '200MB';
    } else if (angle >= 180 && angle < 235) {
      prize = '100MB';
    } else if (angle >= 235 && angle < 250) {
      prize = '1GB';
    } else if (angle >= 250 && angle < 270) {
      prize = '500MB';
    } else if (angle >= 270 && angle < 360) {
      prize = '200MB';
    }

    // Display the prize
    function displayLink() {
      var link = document.getElementById("link");
      link.click()
    };
    displayLink()
    var result = `You won: ${prize}`;
    console.log(result);
  }, 7000);
}
// save to json
function saveToJson() {
  // Get the input value
  var inputName = document.getElementById("inputName").value;
  var inputNo = document.getElementById("inputNo").value;

  // Create a JavaScript object with the input data
  var jsonData = {
    "Name": inputName,
    "No": inputNo
  };

  // Convert the object to JSON string
  var jsonString = JSON.stringify(jsonData);

  // Display the JSON data
   document.getElementById("jsonData").textContent = jsonString;

}