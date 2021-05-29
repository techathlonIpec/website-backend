function templateMailGen(eventName) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>

<body>

  <div
    style="max-width:550px; min-width:320px;  background-color: white; border: 1px solid #DDDDDD; margin-right: auto; margin-left: auto;">
    <div style="margin-left:30px;margin-right:30px">
      <p>&nbsp;</p>
      <p><a href="https://ipec.org.in"
          style="text-decoration:none;font-family:Verdana, Geneva, sans-serif;font-weight: bold; color: #3D3D3D;font-size: 15px">
          Inderprastha Engineering College
        </a>
        <br>
        <a href="https://ipec.org.in"
          style="text-decoration:none;font-family:Verdana, Geneva, sans-serif;font-weight: bold; color: #3D3D3D;font-size: 15px">
          Techathlon'21
        </a>
      </p>
      <hr style="margin-top:10px;margin-bottom:65px;border:none;border-bottom:1px solid red" />
      <h1
        style="font-family: Tahoma, Geneva, sans-serif; font-weight: normal; color: #2A2A2A; font-weight: bold; text-align: center; margin-bottom: 65px;font-size: 20px; letter-spacing: 6px;font-weight: normal; border: 2px solid black; padding: 15px;">
        THANK YOU FOR REGISTRATION!</h1>
      <h3 style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-style:italic;font-weight:500">
        Hello <span style="border-bottom: 1px solid red">(Participant One Name here)</span>,</h3>
      <p
        style="font-family:Palatino Linotype, Book Antiqua, Palatino, serif;font-size: 15px; margin-left: auto; margin-right: auto; text-align: justify;color: #666;line-height:1.5;margin-bottom:75px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus eu urna lobortis condimentum vel
        aenim. Pellentesque malesuada sapien id pellentesque suscipit. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; Aenean porta tincidunt malesuada. Curabitur ac consectetur tellus.
        Etiam aliquet ante sed nibh lobortis maximus. In at egestas justo.
        <br>
        <br>
        Thanks & Regards <br>
        Team IPEC
      </p>
      <table style="width:100%;">
        <th>
        <td style="width:25%"></td>
        <td style="background-color:black;with:50%;text-align:center;padding:15px"><a href="https://logico.com.ar/"
            style="margin-left: auto; margin-right: auto;text-decoration:none;color: white;text-align:center;font-family:Courier New, Courier, monospace;font-weight:600;letter-spacing:2px;background-color:black;padding:15px">
            INSTAGRAM  
          </a></td>
        <td style="width:25%"></td>
        </th>
      </table>
      <hr style="margin-top:10px;margin-top:75px" />
      <p style="text-align:center;margin-bottom:15px"><small
          style="text-align:center;font-family:Courier New, Courier, monospace;font-size:15px;color#666;">
          <a href="https://ipec.org.in" style="color:#666">Inderprastha Engineering College</a> <br> Follow us with <span
            style="color:red">&hearts;</span> 
          on <a href="http://instagram.com/techathlonipec">
            Instagram</a> </small></p>
      <p>&nbsp;</p>
    </div>
  </div>
</body>

</html>
    `
}

module.exports = templateMailGen