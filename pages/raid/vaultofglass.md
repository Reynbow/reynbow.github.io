---
layout: page
permalink: /raid/vaultofglass
---

<html>
    <head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hashedPassword = 'b01774366b2bea90002f784f533085eb3dd6eeb2fc85cbc778c76ef96769715e';

    const checkPassword = () => {
      const inputPassword = prompt('Please enter your password:');
      if (!inputPassword) {
        return false;
      }

      const hashedInput = CryptoJS.SHA256(inputPassword).toString(CryptoJS.enc.Hex);
      return hashedInput === hashedPassword;
    };

    if (!checkPassword()) {
      document.body.innerHTML = 'Access denied. Wrong password.';
    }
  });
</script>


        <title>RAID - SETUP GUIDES</title>

   <style>
            .my_head
            {
                font-family:    roboto, sans-serif;
                font-size:      25px;
                font-weight:    bold;
            }
   </style>
   <style>
            .my_body
            {
                font-family:    roboto, sans-serif;
                font-size:      20px;
                font-weight:    light;
                
            }
   </style>
   </head>

<body>

<br>

<br>
<div class="my_body">
<a href="/raid/">Back</a><br>
<a href="/raid/"><img src="/img/raidbanner/raidpres.png"></a><img src="/img/raidbanner/vog_banner.png"><br><br>
<br>