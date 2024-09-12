function randPass(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = '';
    for (let i = 0; i < len; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
}

function easyPass(len) {
    const cons = 'bcdfghjklmnpqrstvwxyz';
    const vowels = 'aeiou';
    let pass = '';
    let isCon = true;

    for (let i = 0; i < len; i++) {
        pass += isCon ? cons.charAt(Math.floor(Math.random() * cons.length)) : vowels.charAt(Math.floor(Math.random() * vowels.length));
        isCon = !isCon;
    }
    return pass;
}

function wordsPass(len) {
    const words = ["apple", "banana", "cat", "dog", "elephant", "flower", "grape", "house", "igloo", "jacket"];
    let pass = '';
    for (let i = 0; i < len; i++) {
        pass += words[Math.floor(Math.random() * words.length)] + " ";
    }
    return pass.trim();
}

function securePass(len) {
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = '';
    for (let i = 0; i < len; i++) {
        pass += chars.charAt(array[i] % chars.length);
    }
    return pass;
}

function gen() {
    const algo = document.getElementById('algo').value;
    const len = parseInt(document.getElementById('len').value);
    let pass = '';

    switch (algo) {
        case 'simple':
            pass = randPass(len);
            break;
        case 'easy':
            pass = easyPass(len);
            break;
        case 'words':
            pass = wordsPass(len);
            break;
        case 'secure':
            pass = securePass(len);
            break;
        default:
            pass = "Error!";
    }

    document.getElementById('out').innerText = pass;
}
