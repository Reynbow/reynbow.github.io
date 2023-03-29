---
layout: page
permalink: /arg1
---

<html>
    <head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hashedPassword = 'c3b6c495bd4d9d85908dc7ef2bf30573be247938b117c2980914bfc8f61da402';

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
<div class="my_body">
<a href="/arg1/">Back</a><br><br>
<img src="/img/arg/Screenshot 2023-03-27 20-21-25.jpg"><br><br>
<a href="/arg2/">Continue...</a><br><br>
<br>