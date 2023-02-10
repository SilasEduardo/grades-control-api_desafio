import App from './App';


App.listen(3333, () => {
  console.log();
  console.log(`esta escutado na porta ${process.env.PORT}`);
  console.log(`CTRL + Clique em http://localhost:${process.env.PORT} `);
});