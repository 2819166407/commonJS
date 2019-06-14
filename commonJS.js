// 字符转base64
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}

// base64转字符
function b64Decode(str) {
    return decodeURIComponent(atob(str));
}
