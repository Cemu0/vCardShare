function isIOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      
}
function isRunningStandalone() {
    if(isIOS()){
        return (window.navigator.standalone === true);
    }
    return (window.matchMedia('(display-mode: standalone)').matches);
}
//https://dev.to/walternascimentobarroso/make-vcard-with-js-2afl
function downloadToFile(content, filename, contentType) {
    //check if the webpage is being viewed in a webview (like an app's built-in browser) 
    if (!isRunningStandalone()) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        if(isIOS()){
            alert('Scroll down at the end of card to save my contact information.');
        }
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
    }else{
        alert('Please open this page in a regular web browser to download the file.');
    }
        
}
function makeVCard(info) {
    let vcard = `BEGIN:VCARD\n`;
    vcard += `VERSION:3.0\n`;
    vcard += `N:${info.info}\n`;
    vcard += `FN:${info.name}\n`;
    vcard += `ORG:${info.org}\n`;
    vcard += `NICKNAME:${info.nickname}\n`;
    vcard += `TITLE:${info.title}\n`;
    vcard += `BDAY:${info.birthday}\n`;
    vcard += `TEL;TYPE=WORK,VOICE:${info.phone}\n`;
    vcard += `ADR;TYPE=WORK,PREF:;;${info.address}\n`;
    vcard += `URL:${info.website}\n`;
    vcard += `EMAIL:${info.email}\n`;
    for (const [key, value] of Object.entries(info)) {
        if (icons_social[key]) {
        vcard += `X-SOCIALPROFILE;TYPE=${key}:${value}\n`;
        }
    }
    vcard += `PHOTO;ENCODING=b;TYPE=JPEG:${String(profile_image.src).replace("data:image/png;base64,","")}\n`;
    vcard += `REV:${new Date().toISOString()}\n`;
    vcard += `END:VCARD`;
    downloadToFile(vcard, `vcard-${name}.vcf`, "text/vcard");
}