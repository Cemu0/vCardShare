async function decryptData(encryptedHex, remove_key = false) {

      //get the pass from the pass key in url
      var url = new URL(window.location.href);
      var pass = url.searchParams.get("pass");
      if (pass) {
        const password = new buffer.SlowBuffer(pass.toLocaleLowerCase().normalize("NFKC"));
        const salt = new buffer.SlowBuffer("someSalt".normalize("NFKC"));
        //c;ear the pass from the url
        if(remove_key){
          window.history.replaceState({}, document.title, "/" + "show.html");
        }
        //8192: ~1s
        //16384: ~2s
        const N = 16384, r = 8, p = 2;
        const dkLen = 32;
        const start = new Date();
        const key = scrypt.syncScrypt(password, salt, N, r, p, dkLen);

        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
        var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.log("Decrypted: ", decryptedText);
        console.log("Decryption time: ", new Date() - start, "ms");
        // check if the decrypted text is a valid jsons
        try {
          let result = JSON.parse(decryptedText);
          console.log("Decrypted text is a valid json", result);
          return result;
          //show the contact_card
        } catch (e) {
          console.log("Decrypted text is not a valid json");
          return { "error":  "wrong password :<" };
        }
      } else {
        return { "error":  "No password found :<"};
      }
}