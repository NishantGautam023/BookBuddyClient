import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import {Suspense} from "react";
import Loading from "@/components/Loading";


export default async function Home() {



  return (

          <div className="container  min-h-screen">
              {/*<Banner />*/}
              <Suspense fallback={<Loading />}>
                  <BookList  />
              </Suspense>
          </div>



  )
}







