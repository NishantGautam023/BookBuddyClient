import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";


export default async function Home() {
  const response  = await fetch(`${process.env.BACKEND_URL}/api/books`)

// Since we did a network request, then error handling is very important.

  if(!response.ok) {
    throw new Error("An error occurred while fetching the books API")
  }


  const books = await response.json()
  console.log('books', books)




  return (
      <>
     <Banner />
      <BookList books = {books} />
      </>
  )
}







