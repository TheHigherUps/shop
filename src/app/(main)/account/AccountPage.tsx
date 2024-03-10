"use client"

import Link from "next/link"
import Image from "next/image"

export default function AccountPage() {
    return (
        <main className="min-h-[calc(100vh-3rem)]">
            <div className="bg-red-500 w-full h-12 text-white text-5xl text-center mt-12">
                {" "}
                This Page Has Been Blocked
            </div>
            <div className="text-3xl mx-auto w-3/4 md:w-1/2 mt-12">
                <div className="flex flex-col md:flex-row gap-12 justify-center min-h-fit">
                    <Image
                        className="aspect-square"
                        src="/assets/images/HigherUps.png"
                        width={120}
                        height={140}
                        alt="TheHigherUps Seal"
                    />
                    <div className="relative">
                        <div className="text-7xl md:text-9xl">TheHigherUps</div>
                        <div className="absolute -top-3 left-0">
                            Protected By:
                        </div>
                        <div className="absolute -bottom-3 right-0 whitespace-nowrap">
                            Network Unified Tracking System
                        </div>
                    </div>
                </div>
                <p className="my-12">
                    The &apos;/account&apos; page has been blocked by
                    TheHigherUps Network Unified Tracking System (TheHigherUps
                    N.U.T.S) due to unusual activity detected by TheHigherUps
                    Fast Utility Compiling Kernel (TheHigherUps F.U.C.K). This
                    error occurs when TheHigherUps F.U.C.K detects an anomaly in
                    the code generated compared to the code the user receives,
                    successively TheHigherUps F.U.C.K communicates with
                    TheHigherUps N.U.T.S to block the incoming request before
                    any data is transferred across the network. TheHigherUps
                    N.U.T.S as well as TheHigherUps F.U.C.K work in tandem to
                    prevent unauthorized authorities from access to the End
                    Users&apos; private and confidential information. An example
                    where this is executed is with a Man in the Middle Attack (
                    <Link
                        className="underline"
                        href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack"
                    >
                        MITM Atack
                    </Link>
                    ). All information has been sent to TheHigherUps Behavioral
                    Analysis and Logistical Logging System (TheHigherUps
                    B.A.L.L.S) for analysis and further review to determine the
                    severity of the situation. This data will be used to help
                    TheHigherUps Predictive Analysis and Learning Engine for
                    Yield (TheHigherUps P.A.L.E.Y) learn about and prevent
                    future attacks.
                </p>
                <Link className="bg-blue-800 px-2 rounded-full" href="/">
                    RETURN TO SAFETY
                </Link>
            </div>
        </main>
    )
}
