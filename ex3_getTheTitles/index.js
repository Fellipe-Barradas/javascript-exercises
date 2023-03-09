// Array de onde será retirado os títulos
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
// Função principal
function getTitle(array){
    const title = []
    for(let book of array){
        title.push(book.title)
    }
    return title
}
// Execução da função
console.log(getTitle(books))