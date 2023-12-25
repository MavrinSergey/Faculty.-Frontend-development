// export function formInObj(event) {
//     const obj = {};
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     formData.forEach((value, key) => (obj[key] = value));
//     return obj;
// }

export function formInObj(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData);
    return obj;
}

formInObj();