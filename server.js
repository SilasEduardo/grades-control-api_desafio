import App from './App';
App.get('/', (req, res)=> {
  res.send('deu certo')
});

App.listen(3333, ()=> {
  console.log('server run in port 3333')
});