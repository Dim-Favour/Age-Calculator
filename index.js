const CalcBtn = document.getElementById("calc");
        CalcBtn.addEventListener("click", function() {
          const birthdatepick = document.getElementById("Calculator");
          const birthdatevalue = birthdatepick.value;
          const birthday = new Date(birthdatevalue);
          const today = new Date();
          
          let age = today.getFullYear() - birthday.getFullYear();
          console.log(age);
          const monthDiff = today.getMonth() - birthday.getMonth();
          const dayDiff = today.getDate() - birthday.getDate();
          console.log("Month Difference is:", monthDiff);
          console.log("Day Difference is:", dayDiff);
          if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0 )) {
            age--;
          }
          console.log("Final Age:", age)
          const result = document.getElementById("result")
          result.textContent = "You are " + age + " years old";
        });