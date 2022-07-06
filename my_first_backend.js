const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    let songs =
      ['Accidents Will Happen',
      'Adeste Fideles',
      'Ad-Lib Blues',
      'An Affair to Remember (Our Love Affair)',
      'After You\'ve Gone',
      'Air For English Horn',
      'Alice Blue Gown',
      'All By Myself',
      'All I Need is the Girl',
      'All Alone',
      'All I Do Is Dream of You',
      'All of Me',
      'All of You',
      'Exodus',
      'Faithful',
      'Here Goes',
      'I Believe',
      'I Dream of You',
      'I Love You',
      'I Never Knew'
        ];
    let song = songs[Math.floor(Math.random()*songs.length)];
    res.send(song)
})

app.get('/birth_date', (req, res) => {
    res.send('September 12, 1915')
})

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, NJ')
})

app.get('/wives', (req, res) => {
    res.send('Nancy Sinatra, Ava Gardner, Mia Farrow, Barbara Sinatra')
})
    
app.get('/picture', (req, res) => {
    res.redirect('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
})

app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
})

app.use(basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    unauthorizedResponse: (req) => {
        return 'Not authorized'
    }
}))

app.get('/protected', (req, res) => {
    res.send('Welcome, authenticated client')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})