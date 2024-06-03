
import { Card } from "flowbite-react";
import { Plans } from "../customTheme/appTheme";
import Link from "next/link";
import PaymentButton from "../components/PaymentButton";

export default function BidsCredits() {
    
    return (
        <div className="w-full gap-4">
            <div className="h-full flex justify-center bg-opacity-75 bg-black">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 top-0 mt-20 mb-3 gap-2">
                    {
                        Plans.map((item) => (
                            <Card key={item?.id} className='max-w-sm m-2'>
                                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{"Package:" + item?.Package}</h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white">
                                    <span className="text-3xl font-semibold">R</span>
                                    <span className="text-5xl font-extrabold tracking-tight">{item?.Price?.toFixed(2)}</span>
                                </div>
                                <ul className="my-7 space-y-5">
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-appGreen dark:text-appGreen"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Get Copy of your receipt</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-appGreen dark:text-appGreen"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            {item?.Offering}
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-appGreen dark:text-appGreen"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Start bidding instantly</span>
                                    </li>

                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-appGreen dark:text-appGreen"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Refundable</span><Link className="underline" href={"terms-and-conditions"} target="_blank">Read Refund Policy</Link>
                                    </li>
                                </ul>
                                
                                {/* <form action="https://sandbox.payfast.co.za​/eng/process" method="post">
                                    <input type="hidden" name="merchant_id" value="10000100" />
                                    <input type="hidden" name="merchant_key" value="46f0cd694581a" />
                                    <input type="hidden" name="return_url" value="https://inkowaguy.vercel.app/success"/>
                                    <input type="hidden" name="cancel_url" value="https://inkowaguy.vercel.app/cancel"/>
                                    <input type="hidden" name="notify_url" value="https://inkowaguy.vercel.app/notify"/>
                                    <input type="hidden" name="amount" value={item?.Price?.toFixed(2)} />
                                    <input type="hidden" name="item_name" value={"Biding Package:"+item?.Package} />
                                    <input type="hidden" name="name_first" value="John"/>
                                    <input type="hidden" name="name_last" value="Doe"/>
                                    <input type="hidden" name="email_address" value="devslcx@gmail.com"/>
                                    <Button
                                        theme={customsubmitTheme}
                                        color="appsuccess"
                                        type="submit"
                                        className="inline-flex w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-200"
                                    >
                                        <HiShoppingCart className="mr-2 h-5 w-5" /> Choose plan
                                    </Button>
                                </form> */}

                                <PaymentButton price={item?.Price?.toFixed(2)} Bidpackage={item?.Package}/>

                            </Card>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
