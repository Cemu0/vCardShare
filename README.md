# Encrypted VCard: Your Secure Online Contact Card

Welcome to Encrypted VCard, a unique way to create and share your contact card online with an added layer of security.  
Check example here

## Getting Started

Ready to create your own encrypted online contact card? Here's how:

1. **Fork this repository.** This will create a copy of this project in your GitHub account.
2. **Encrypt your data.** We use `scrypt` to process your password and create a [derived key](https://en.wikipedia.org/wiki/Scrypt).
3. **Paste the encrypted data into `data.js`.** This is where your secure information will be stored.
4. **Set up the page.** Get your page ready to share with the world.
5. **Share and Enjoy!** Add `?pass={your pass}` to your URL when sharing. For example, if your password is 'ABC', your link should look like this: `example.com?pass=ABC`.

## Behind the Scenes

Curious about how it works? Here's the process:

1. Your password is processed through `scrypt` to create a derived key.
2. Your data is encrypted with the derived key using `aes256`, producing the encrypted data.

## Advanced Usage

For those who want an extra layer of security, check out this [guide](https://github.com/ricmoo/scrypt-js?tab=readme-ov-file#tuning) on tuning `scrypt`.

## Acknowledgements

This project wouldn't be possible without these fantastic libraries:

- `scrypt` and `aes256` for encryption: [ricmoo](https://github.com/ricmoo/scrypt-js)
- VCard creation: [Walter Nascimento](https://dev.to/walternascimentobarroso/make-vcard-with-js-2afl)
- Data visualization: [D3.js](https://d3js.org/)
- Styling and icons: [Bootstrap 4.0.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and [Bootstrap Icons](https://icons.getbootstrap.com/)

## Tag for search
Encryption, Secure Contact Card, VCard, JavaScript, AES256, Scrypt, Data Visualization, D3.js, Bootstrap, Online Contact Card, Encrypted Data, Web Security