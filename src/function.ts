function axios(url: string){
  console.log(url)
}

axios('https://medium.com')
axios(111)
// 这样的错误参数类型，eslint不报错吗？？