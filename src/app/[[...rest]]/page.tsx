import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import {Suspense} from "react";
import Loading from "@/components/Loading";
import {SignUp} from "@clerk/nextjs";
import {currentUser} from "@clerk/nextjs/server";


export default async function Home() {

  const user = await currentUser();

if(!user) {
    return <SignUp />
}

  return (

          <div className="container  min-h-screen">
             <p> Hello {user.emailAddresses[0].emailAddress}</p>
              <Banner />
              <Suspense fallback={<Loading />}>
                  <BookList  />
              </Suspense>
          </div>



  )
}







