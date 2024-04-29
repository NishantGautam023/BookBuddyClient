
import Link from 'next/link';
import React from 'react';



const Navbar = () => {
    return (
        <header className="flex flex-wrap justify-between items-center">
            <Link href={'/'}>
                <div className="flex-1 cursor-pointer">
                    <BookIcon/>

                </div>

            </Link>
            <span className="text-xl font-bold uppercase tracking-tight text-primary-500 m-2.5">
                               Book Buddy
                            </span>
            <ul className="order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0">
                <li>
                    <Link href={'/'}>
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>About Us</div>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <div>library</div>
                    </Link>
                </li>
            </ul>
            <span className="flex-1 text-right">
                <button className="btn">Join us</button>
            </span>
        </header>
    );
};


const BookIcon = () => (
    <svg height="45" width="45" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" fill="none" fill-rule="evenodd">
            <g id="002---Open-Book" fill-rule="nonzero">
                <path id="Rectangle-path" d="m26 29h8v20h-8z" fill="#c81e1e"/>
                <path id="Shape" d="m34 20v5h-8v-5c0-.5522847.4477153-1 1-1h6c.5522847 0 1 .4477153 1 1z"
                      fill="#c81e1e"/>
                <path id="Shape" d="m34 53v5c0 .5522847-.4477153 1-1 1h-6c-.5522847 0-1-.4477153-1-1v-5z"
                      fill="#c81e1e"/>
                <path id="Shape"
                      d="m26 20.12v37.82c-.0021871.3361612-.1731323.6487299-.4549905.8319377-.2818581.1832078-.6369093.2125367-.9450095.0780623l-23-10.12c-.36383826-.1562267-.59975856-.5140391-.6-.91v-37.82c-.00144318-.33760981.16874812-.65282414.4518175-.83681924.28306937-.18399509.64023219-.21156093.9481825-.07318076l.98.43 22.02 9.69c.3656218.1540878.6024271.5132426.6.91z"
                      fill="#f44335"/>
                <path id="Shape"
                      d="m25.4 19.21-22.02-9.69-.98-.43c-.27479769-.12414639-.59127064-.11586483-.85919928.02248378-.26792865.13834861-.45791597.39158472-.51580072.68751622l21.375 9.41c.3656218.1540878.6024271.5132426.6.91v37.82c-.0012552.0673619-.0096352.1344018-.025.2l1.625.715c.3081002.1344744.6631514.1051455.9450095-.0780623.2818582-.1832078.4528034-.4957765.4549905-.8319377v-37.825c.0024271-.3967574-.2343782-.7559122-.6-.91z"
                      fill="#c81e1e"/>
                <path id="Shape"
                      d="m59 10v37.82c-.0002414.3959609-.2361617.7537733-.6.91l-23 10.12c-.3081002.1344744-.6631514.1051455-.9450095-.0780623-.2818582-.1832078-.4528034-.4957765-.4549905-.8319377v-37.82c-.0024271-.3967574.2343782-.7559122.6-.91l22.02-9.69.98-.43c.3079503-.13838017.6651131-.11081433.9481825.07318076.2830694.1839951.4532607.49920943.4518175.83681924z"
                      fill="#c81e1e"/>
                <path id="Shape"
                      d="m56.62 9.52-22.02 9.69c-.3656218.1540878-.6024271.5132426-.6.91v-.12c0-.5522847-.4477153-1-1-1h-3v-3s.01-.07.03-.2c.48-1.85 7.38-6.78 16.97-9.49 1.55-.44 3.17-.82 4.84-1.12.7186087-.11684493 1.4444971.16204902 1.9.73z"
                      fill="#ffe0b2"/>
                <path id="Shape"
                      d="m53.74 5.92c-.4555029-.56795098-1.1813913-.84684493-1.9-.73-.528.095-1.042.211-1.56.321.1735198.11177974.3286904.24974666.46.409l2.88 3.6-21.543 9.48h.923c.5522847 0 1 .4477153 1 1v.12c-.0024271-.3967574.2343782-.7559122.6-.91l22.02-9.69z"
                      fill="#dfc49c"/>
                <path id="Shape"
                      d="m30 16v3h-3c-.5522847 0-1 .4477153-1 1v.12c.0024271-.3967574-.2343782-.7559122-.6-.91l-22.02-9.69 2.88-3.6c.45550293-.56795098 1.18139128-.84684493 1.9-.73 1.67.3 3.29.68 4.84 1.12 9.59 2.71 16.49 7.64 16.97 9.49.02.13.03.2.03.2z"
                      fill="#ffe0b2"/>
                <path id="Shape" d="m29.97 15.8c-.48-1.85-7.38-6.78-16.97-9.49v-5.31c14.78 2.77 16.76 13.22 16.97 14.8z"
                      fill="#dfc49c"/>
                <path id="Shape" d="m47 1v5.31c-9.59 2.71-16.49 7.64-16.97 9.49.21-1.58 2.19-12.03 16.97-14.8z"
                      fill="#dfc49c"/>
                <path id="Shape" d="m55 28-17 8v-10l17-8z" fill="#f57c00"/>
                <path id="Shape" d="m5 28 17 8v-10l-17-8z" fill="#ff9801"/>
                <path id="Rectangle-path" d="m26 25h8v4h-8z" fill="#ffdc00"/>
                <path id="Rectangle-path" d="m31 25h3v4h-3z" fill="#fec108"/>
                <path id="Rectangle-path" d="m26 49h8v4h-8z" fill="#ffdc00"/>
                <path id="Rectangle-path" d="m31 49h3v4h-3z" fill="#fec108"/>
                <g fill="#000">
                    <path id="Shape"
                          d="m59.093 8.326c-.5662153-.36991753-1.28103-.42860758-1.9-.156l-.276.122-2.4-3c-.6816231-.8590558-1.7789376-1.27587413-2.859-1.086-1.239.222-2.461.494-3.659.8v-4.006c.000236-.29759646-.1320866-.5798359-.361-.77-.229639-.1886178-.5306902-.26653263-.823-.213-10.957 2.054-15.198 8.273-16.815 12.253-1.622-3.987-5.864-10.2-16.816-12.253-.2922997-.0532539-.5932346.02463085-.823.213-.2289134.1901641-.361236.47240354-.361.77v4.012c-1.2-.309-2.42-.581-3.659-.8-1.08020733-.1869441-2.17637128.23020398-2.859 1.088l-2.4 3-.276-.121c-.61696612-.2716843-1.3292875-.21427423-1.89477956.15271118-.56549206.3669854-.90805529.99416009-.91122044 1.66828882v37.816c.00015853.7927219.46850095 1.5105331 1.194 1.83l23 10.12c.5589948.2527873 1.2052887.2222947 1.738-.082.3184073.2054043.6890894.3150817 1.068.316h6c.3784704-.0008113.7487713-.1101316 1.067-.315.2851929.1594225.6053284.2459828.932.252.2778708-.0001623.5526775-.0580522.807-.17l23-10.12c.7258311-.3196131 1.1942379-1.0379153 1.194-1.831v-37.816c.0007905-.6756245-.3405909-1.30569338-.907-1.674zm-7.082-2.148c.3581219-.05692217.719165.08329245.945.367l2.067 2.581-20.83 9.165c-.029.012-.05.035-.079.049-.3291409-.2218424-.7170772-.340243-1.114-.34h-2v-1.927-.037c.421-1.409 8.734-7.662 21.011-9.858zm-19.011 13.822v.121 3.879h-6v-4zm-6 6h6v2h-6zm0 4h6v18h-6zm0 20h6v2h-6zm19-47.772v3.34c-4.9018544 1.40518528-9.5407917 3.60287886-13.733 6.506 1.633-3.364 5.351-7.94 13.733-9.846zm-32 0c8.376 1.9 12.093 6.475 13.73 9.844-4.1913599-2.90223328-8.8292732-5.09924628-13.73-6.504zm-6.956 4.317c.22596392-.28353234.58690124-.42370588.945-.367 12.255 2.192 20.558 8.426 21 9.793l.015.1v1.929h-2.004c-.3969228-.000243-.7848591.1181576-1.114.34-.029-.014-.051-.037-.08-.05l-20.829-9.164zm-5.044 41.271v-37.816l23 10.12v37.816zm25 10.184v-4h6v4zm8-.064v-37.815l23-10.121v37.816z"/>
                    <path id="Shape"
                          d="m55.536 17.156c-.2890591-.1837408-.6520475-.2067577-.962-.061l-17 8c-.3504726.1650243-.5741072.517619-.574.905v10c-.0000948.3424343.1750354.6611057.4641593.844596.2891239.1834902.6520324.206281.9618407.060404l17-8c.3504726-.1650243.5741072-.517619.574-.905v-10c-.0000746-.3421915-.1751158-.6605854-.464-.844zm-1.536 10.209-15 7.059v-7.789l15-7.059z"/>
                    <path id="Shape"
                          d="m22.426 25.1-17-8c-.30900576-.1455038-.67090248-.1232335-.95973635.05906-.28883388.1822934-.46465225.4993945-.46626365.84094v10c-.00010723.387381.22352739.7399757.574.905l17 8c.1333682.0623678.2787696.094793.426.095.5522847 0 1-.4477153 1-1v-10c-.0018232-.3855726-.2251576-.7357486-.574-.9zm-1.426 9.324-15-7.059v-7.789l15 7.059z"/>
                    <path id="Shape"
                          d="m22.426 40.1-17-8c-.32332536-.1521951-.70328545-.1203372-.99675299.0835732s-.45585782.5488944-.426.905c.02985782.3561055.24742763.6692317.57075299.8214268l17 8c.4998177.2352733 1.0957267.0208177 1.331-.479s.0208177-1.0957267-.479-1.331z"/>
                    <path id="Shape"
                          d="m20.4 44.144-12.955-6.1c-.32528507-.161975-.71283586-.134746-1.01227658.0711217-.29944073.2058678-.46363859.5579702-.42888224.919686.03475635.3617157.26299617.6761098.59615882.8211923l12.954 6.1c.3243799.1608174.7103503.1337397 1.0090991-.0707933s.4636095-.5545719.4310198-.9151582c-.0325898-.3605863-.2575394-.6753942-.5881189-.8230485z"/>
                    <path id="Shape"
                          d="m54.574 32.1-17 8c-.3233254.1521951-.5408952.4653213-.570753.8214268-.0298578.3561056.1325325.7010896.426.905s.6734276.2357683.996753.0835732l17-8c.4998177-.2352733.7142733-.8311823.479-1.331s-.8311823-.7142733-1.331-.479z"/>
                    <path id="Shape"
                          d="m52.552 38.047-12.952 6.097c-.4877968.2418344-.6924884.8294669-.4605044 1.3220245.231984.4925575.8153849.7090154 1.3125044.4869755l12.954-6.1c.3338245-.1454497.5622005-.4608601.5961943-.8234051.0339937-.3625449-.1317685-.7149115-.4327362-.919882-.3009676-.2049705-.6895621-.2301423-1.0144581-.0657129z"/>
                </g>
            </g>
        </g>
    </svg>
);


export default Navbar;

