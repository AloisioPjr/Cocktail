{
  src = "https://code.jquery.com/jquery-3.5.1.min.js"


  //API random number:   from this website: http://numbersapi.com

  const api_url = 'http://numbersapi.com/random/year?json'
  async function getRandom() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { text } = data; //got data from API
    console.log(text);
    document.getElementById('number').textContent = text; //DOM parser
  }
  getRandom();
}

{
  const api_url = 'http://numbersapi.com/random/date?json'
  async function getRandom2() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { text } = data; //got data from API
    console.log(text);
    document.getElementById('number2').textContent = text; //DOM parser
  }
  getRandom2();
}

{
  const api_url = 'http://numbersapi.com/random/date?json'
  async function getRandom3() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { text } = data; //got data from API
    console.log(text);
    document.getElementById('number3').textContent = text; //DOM parser
  }
  getRandom3();
}

