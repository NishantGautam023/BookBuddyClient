import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import {Suspense} from "react";
import Loading from "@/components/Loading";
import {currentUser} from "@clerk/nextjs/server";





export default async function Home() {

const user = await currentUser();




  return (

          <div className="container  min-h-screen">

              {/* Conditionally render greeting if user is logged in */}
              {user ? (
                  <p>Hello {user.emailAddresses[0].emailAddress}</p>
              ) : (
                  <div> </div>
              )}

              <Banner />
              <Suspense fallback={<Loading />}>
                  <BookList  />
              </Suspense>
          </div>

  )
}







