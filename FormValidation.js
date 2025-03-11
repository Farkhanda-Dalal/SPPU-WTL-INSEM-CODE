<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Form Validation</title>
    <style>
        body {
            background-color: yellow;
            font-family: Arial, sans-serif;
        }
        input {
            width: 250px;
            padding: 8px;
            margin: 5px 0;
        }
        .error {
            color: red;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h1>VALIDATION OF REGISTRATION FORM</h1>

    <form onsubmit="return validateForm()">
        <input type="text" id="full_name" placeholder="Full Name" required /><br/>
        <span id="nameError" class="error"></span><br/>

        <input type="tel" id="phone_no" placeholder="Phone No with country code (+91 or 0)" required /><br/>
        <span id="phoneError" class="error"></span><br/>

        <input type="email" id="email" placeholder="Email Address" required /><br/>
        <span id="emailError" class="error"></span><br/>

        <input type="submit" value="Submit" />
    </form>

    <script>
        function validateForm() {
            let isValid = true;

            let fullName = document.getElementById("full_name").value.trim();
            let phoneNo = document.getElementById("phone_no").value.trim();
            let email = document.getElementById("email").value.trim();

            let nameError = document.getElementById("nameError");
            let phoneError = document.getElementById("phoneError");
            let emailError = document.getElementById("emailError");

            // Name Validation: Only letters & spaces, min 2 characters
            let namePattern = /^[A-Za-z\s]{2,}$/;
            if (!namePattern.test(fullName)) {
                nameError.innerText = "Invalid name (Only letters & min 2 chars)";
                isValid = false;
            } else {
                nameError.innerText = "";
            }

            // Phone Number Validation: Must start with +91 or 0 and be 10 digits
            let phonePattern = /^(\+91|0)?[6-9]\d{9}$/;
            if (!phonePattern.test(phoneNo)) {
                phoneError.innerText = "Invalid phone number (Start with +91 or 0, 10 digits)";
                isValid = false;
            } else {
                phoneError.innerText = "";
            }

            // Email Validation
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                emailError.innerText = "Invalid email format";
                isValid = false;
            } else {
                emailError.innerText = "";
            }

            return isValid; // Prevent form submission if invalid
        }
    </script>

</body>
</html>



<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <title>Fibonacci Series</title>
</head>
<body>

    <h2>Fibonacci Series Generator</h2>
    <button onclick="generateFibonacci()">Generate Fibonacci</button>
    <p id="output"></p>

    <script>
        function fibonacci(num) {
            if (num < 2) {
                return num;
            } else {
                return fibonacci(num - 1) + fibonacci(num - 2);
            }
        }

        function generateFibonacci() {
            let nTerms = prompt("Enter the number of terms:");
            nTerms = parseInt(nTerms);

            if (isNaN(nTerms) || nTerms <= 0) {
                document.getElementById("output").innerText = "Please enter a valid positive integer.";
                return;
            }

            let result = "";
            for (let i = 0; i < nTerms; i++) {
                result += fibonacci(i) + " ";
            }

            document.getElementById("output").innerText = "Fibonacci Series: " + result;
        }
    </script>

</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onclick="calculateFactorial()">Calculate Factorial</button>
    <script>
      function calculateFactorial() {
        // Prompt the user to enter a number
        let number = prompt("Please enter a number:", "5");
        // Convert the input to a number
        number = parseInt(number);
        // Validate if the input is a positive integer
        if (isNaN(number) || number < 0) {
          alert("Invalid input! Please enter a positive integer.");
          return;
        }
        // Calculate factorial
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
          factorial *= i;
        }
        // Display the result in an alert box
        alert("The factorial of " + number + " is " + factorial);
      }
    </script>
  </body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <title>Change Paragraph Color</title>
</head>
<body>

    <p id="myPara">This is a paragraph.</p>
    <button onclick="changeColor()">Change Color</button>

    <script>
        function changeColor() {
            document.getElementById("myPara").style.color = "red";
        }
    </script>

</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <title>Change Color on Hover</title>
</head>
<body>

    <p id="myPara" onmouseover="changeColor()" onmouseout="resetColor()">Hover over me!</p>

    <script>
        function changeColor() {
            document.getElementById("myPara").style.color = "red";
        }

        function resetColor() {
            document.getElementById("myPara").style.color = "black";
        }
    </script>

</body>
</html> -->


