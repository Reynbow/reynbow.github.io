---
layout: page
permalink: /arg3
---

<html>
    <head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const hashedPassword = 'bc0978c908a0e4f161d2b17c9db8bceccfbd3fa54d509bdcc64e1808133ac937';

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
<img src="/img/arg/"><br><br>
<a href="/arg2/">Continue...</a><br><br>
<br>