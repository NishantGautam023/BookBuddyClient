
import {Book} from "@/types";
import Image from "next/image";
import Link from "next/link";



export default function BookCard({book}: { book: Book }) {




    return (
        <>

            <div className="">
                <div className="item">
                    <Image src={book.coverImage} sizes="100vw" alt={book.title} width={400} height={300} />
                    <div>
                        <h2>{book.title}</h2>
                        <p>{book.author.name}</p>

                                <Link className='anchor py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm*/}
                             hover:border-primary-100 hover:bg-primary-100 transition'  href={`/book/${book._id}`}>Read more
                                </Link>




                    </div>

                </div>






            </div>



        </>
    )
}
