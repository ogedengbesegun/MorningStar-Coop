export const membershipHtml = (form, imageUri) => `
<html>
<body style="font-family: Arial; text-align: center; margin:20px;
border:1px solid green; padding:10px; border-radius:15px;" id="print-area">

<h1 style="color:green;font-size:40px;text-decoration:underline;">Morning Star Cooperative Society</h1>
<h1 style="color:green;font-size:40px;text-decoration:underline;">Membership Form</h1>

<div style="text-align:start;margin-left:40px;margin-right:40px;">
  ${
    imageUri
      ? `<img src="${imageUri}" width="200" height="200" style="border-radius: 10px;"/>`
      : ""
  }

  <h2>Full Name:</h2>
  <span style="text-decoration:underline;font-size:30px;">${form.name}</span>

  <h2>Oracle Number: <span style="font-size:30px;">${form.oracle}</span></h2>
  <h2>Phone Number: <span style="font-size:30px;">${form.phone}</span></h2>
  <h2>Date of Birth: <span style="font-size:30px;">${form.dob.toLocaleDateString(
    "en-NG",
    { year: "numeric", month: "long", day: "numeric" }
  )}</span></h2>
  <h2>Monthly Contribution: <span style="font-size:30px;">${form.amount}</span></h2>

  <p style="font-size:25px;margin-top:15px;color:grey;font-style:italic;">
    I understand that by signing up, I become a member of Morning
    Star Cooperative Society and agree to its terms and conditions.
  </p>
</div>

<footer style="bottom:-90px; position:relative; padding:15px; background-color:green;">
  <span style="color:white;font-size:30px;">
    Morning Star Coop Society © ${new Date().getFullYear()}
  </span>
</footer>

</body>
</html>`;
