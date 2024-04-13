//https://dev.to/walternascimentobarroso/make-vcard-with-js-2afl
function downloadToFile(content, filename, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
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