"use client";

export default function FeatureSection() {
  return (
    <section className="flex justify-center px-4 text-gray-600 mb:12 md:mb-32">
      <div className=" max-w-6xl ">
        <div className="flex flex-col items-center  ">
          <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>
          <p className="mt-4  text-center max-w-2xl">Experience secure sharing, password-protected access, auto-deletion. User-friendly and encrypted for confidential communication. Share secret messages with ease, making us special in the digital world.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500  p-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fill="none"
                  d="M0 0h24v24H0z"
                />
                <path d="M11 2l7.298 2.28a1 1 0 01.702.955V7h2a1 1 0 011 1v8a1 1 0 01-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 013 13.374V5.235a1 1 0 01.702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 001.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 01-1-1V8a1 1 0 011-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z" />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Secure Message Sharing</h2>

              <p className="mt-1 text-base text-gray-500">Users can encrypt secret messages with passwords and generate unique URLs to share privately.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500 p-4">
              <svg
                fill="none"
                viewBox="0 0 15 15"
                className="h-5 w-5">
                <path
                  stroke="currentColor"
                  d="M12.5 8.5v-1a1 1 0 00-1-1h-10a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-1m0-4h-4a2 2 0 100 4h4m0-4a2 2 0 110 4m-9-6v-3a3 3 0 016 0v3m2.5 4h1m-3 0h1m-3 0h1"
                />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Password-Protected Access</h2>

              <p className="mt-1 text-base text-gray-500">LRecipients need the password to access and read the encrypted message via the shared URL.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500 p-4">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2v2m0 10.75A7.1 7.1 0 0114.85 9M5.6 16.2a9 9 0 0112.8-12.8M2 12h2m10 0h2m-5 5v2m0-10v2"
                />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Self-Destructing Messages</h2>

              <p className="mt-1 text-base text-gray-500">Messages are automatically deleted after 3 days for enhanced security and privacy.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500 p-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path d="M11.991 0a.883.883 0 00-.871.817v3.02a.883.883 0 00.88.884.883.883 0 00.88-.88V.816A.883.883 0 0011.991 0zm7.705 3.109a.88.88 0 00-.521.174L16.8 5.231a.88.88 0 00.559 1.563.88.88 0 00.56-.2l2.37-1.951a.88.88 0 00-.594-1.534zM4.32 3.122a.883.883 0 00-.611 1.52l2.37 1.951a.876.876 0 00.56.2v-.002a.88.88 0 00.56-1.56L4.828 3.283a.883.883 0 00-.508-.16zm7.66 3.228a5.046 5.046 0 00-5.026 5.045v1.488H5.787a.967.967 0 00-.965.964v9.189a.967.967 0 00.965.964h12.426a.967.967 0 00.964-.964v-9.19a.967.967 0 00-.964-.963h-1.168v-1.488A5.046 5.046 0 0011.98 6.35zm.012 2.893a2.152 2.152 0 012.16 2.152v1.488H9.847v-1.488a2.152 2.152 0 012.145-2.152zm7.382.503a.883.883 0 10.07 1.763h3.027a.883.883 0 000-1.76h-3.027a.883.883 0 00-.07-.003zM1.529 9.75a.883.883 0 000 1.76h2.999a.883.883 0 000-1.76zm10.46 6.774a1.28 1.28 0 01.64 2.393v1.245a.63.63 0 01-1.259 0v-1.245a1.28 1.28 0 01.619-2.393z" />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">End-to-End Encryption</h2>

              <p className="mt-1 text-base text-gray-500">The application ensures the message remains encrypted from sender to recipient.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500 p-4">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2C6.48 2 2 6.48 2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6c0-5.52-4.48-10-10-10zm0 4a2 2 0 012 2v2h-4v-2a2 2 0 012-2zm-2 10h4v-2H7v2z"
                />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">Confidential Communication</h2>

              <p className="mt-1 text-base text-gray-500">Enable confidential conversations without leaving traces after the message is deleted.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-blue-200 text-blue-500 p-4">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm3 5h-6a1 1 0 100 2h6a1 1 0 100-2zm-3 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                />
              </svg>
            </span>

            <div>
              <h2 className="text-lg font-bold">User-Friendly Interface</h2>

              <p className="mt-1 text-base text-gray-500">Easy-to-use interface for seamless message encryption, sharing, and decryption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
