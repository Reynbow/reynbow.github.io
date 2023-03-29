---
layout: page
permalink: /arg2
---

<html>
    <head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hashedPassword = 'b14d7b354fcac99bfaffd04e7b16a78cf29f46c45a9a2a1aeb248e0d0251afbc';

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
<img src="/img/arg/Screenshot 2023-03-27 20-28-30.jpg"><br><br>
<a href="/arg2/">Continue...</a><br><br>
<br>