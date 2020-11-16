const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon", 
"Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",
"That which does not kill us makes us stronger. -Friedrich Nietzsche",
"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. – Bernard M. Baruch",
"We must not allow other people’s limited perceptions to define us. – Virginia Satir",
"Do what you can, with what you have, where you are. – Theodore Roosevelt",
"Be yourself; everyone else is already taken. -Anonymous"]

const newQuote = () => {
    const randomNum = Math.floor(Math.random() * quotes.length)
    document.getElementById(`quoteDisplay`).innerHTML = quotes[randomNum];

}
