---
layout: page
permalink: /arg5
---

<html>
    <head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hashedPassword = '';

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
<a href="/arg1/">Back</a><br><br>
<img src="/img/arg/"><br><br>
<a href="/arg2/">Continue...</a><br><br>
<br>