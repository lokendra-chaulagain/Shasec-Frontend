"use client";

export default function StatSection() {
  return (
    <section className=" text-gray-600 mt-28">
      <div className="">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Trusted by eCommerce Businesses</h2>

          <p className="mt-4  sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.</p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium ">Total Sales</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium ">Official Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium ">Total Addons</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
