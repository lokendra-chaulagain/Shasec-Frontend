"use client";

export default function page() {
  return (
    <div className="flex   justify-center px-4 mt-20  ">
      <div className="flex flex-col max-w-6xl text-gray-600 ">
        <h1 className=" text-3xl xl:text-5xl font-extrabold text-center mb-5">How To Use Secure Message Sharing Feature</h1>
        <p className=" mb-8 ">In today's digital age, privacy and security are paramount. We are thrilled to introduce our revolutionary message sharing platform, designed to ensure the confidentiality of your conversations. With a range of cutting-edge features, we offer seamless and secure communication for users seeking utmost privacy.</p>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Sharing Secrets, The Safe Way: Secure Message Sharing</h2>
          <p className="">Our platform enables users to share sensitive information confidently. Enter your secret message, and our system generates a unique URL for secure sharing. Whether it's personal or professional, our encryption technology keeps your message safe from prying eyes.</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Locking It Down with Password Protection: Password-Protected Access</h2>
          <p className="">Protect your encrypted messages with an extra layer of security. Choose to encrypt your message with a password before generating the unique URL. When recipients access the URL, they will be prompted to enter the correct password, ensuring that only the intended recipient can read the message.</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Self-Destruct Mode: Your Messages, Your Rules: Automatic Message Deletion</h2>
          <p className="">We understand the value of time-sensitive information. Set your desired expiration date for the message or use the default 3-day auto-delete feature. Once the time is up, the message will disappear from our system, leaving no digital footprint behind.</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">User-Friendly and Encrypted Communication: User-Friendly Interface</h2>
          <p className="">Navigating through our platform is a breeze. With an intuitive interface, you can effortlessly compose, encrypt, and share messages. End-to-end encryption guarantees that only you and your intended recipient can access the content, fostering a trustworthy communication environment.</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Creating Your Secret Messages: Message Page Setup</h2>
          <p className="">Welcome to our message creation page. Type your confidential message and choose whether to encrypt it with a password. Select an expiration date or leave it to our default 3-day auto-delete setting. Start sharing your private information securely in just a few clicks!</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Unlocking Secrets with Ease: Search Message Page</h2>
          <p className="">Receiving a shared message? Simply enter the URL and click search. If the message is encrypted, our platform will prompt you to enter the correct password for decryption. No password required? Dive straight into the confidential content.</p>
        </div>

        <div className="  mb-12">
          <h2 className="text-xl font-bold mb-2">Learn How to Safeguard Your Conversations: Blog Post - Tips and Tricks</h2>
          <p className="">In this blog post, we'll guide you through utilizing our platform's exceptional features. From secure message sharing to password protection, we'll help you harness the full potential of our application, ensuring your sensitive information remains confidential and well-protected.</p>

          <ul className="list-disc list-inside mt-4">
            <li className="">Always use strong and unique passwords for message encryption.</li>
            <li className="">Regularly update your password to enhance security.</li>
            <li className="">Avoid sharing passwords through insecure channels.</li>
            <li className="">Set an appropriate expiration date for time-sensitive information.</li>
            <li className="">Be cautious when sharing URLs; keep them confidential to prevent unauthorized access.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
