const init_text = document.getElementById("init_text");
const dest_text = document.getElementById("t_text");
const text_val = document.getElementById("options");
const translate_btn = document.querySelector(".translate_btn");

const translate = () =>{
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-key": "8d7efb23bbmsh74c2179adf8a2c0p153309jsna428f531eb03",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
	},
	"body": {
		"q": `${init_text.value}`,
		"target": `${text_val.value}`
	}
})
.then(response => {
    const result = response.json();
	console.log(result);
    result.then(data =>{
        dest_text.innerHTML = data.data['translations'];
    })
})
.catch(err => {
	console.error(err);
});
}

translate_btn.addEventListener('click', translate())