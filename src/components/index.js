const Header = () => {
    const template = `
        <section class="mx-auto container pt-12 lg:px-4 xl:px-0">
            <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                <div class="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center">
                    <h1 class="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800">
                        Find the most exciting startups</h1>
                    <p class="text-lg leading-tight text-gray-600 font-light leading-relaxed pt-8">
                        Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae
                        augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et.
                        Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <div class="mt-12 flex flex-wrap">
                        <div class="mr-6 mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                            <button
                                    class="bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 rounded text-white px-8 py-4 text-xl">Get
                                Started</button>
                        </div>
                        <div class="mt-5 sm:mt-0 md:mt-5 lg:mt-0">
                            <button
                                    class="transition duration-150 ease-in-out hover:border-indigo-700 hover:text-indigo-700 rounded border border-indigo-600 text-indigo-600 px-8 py-4 text-xl">Live
                                Demo</button>
                        </div>
                    </div>
                </div>
                <div class="md:w-6/12 lg:w-6/12 relative mx-4 md:mx-4 lg:ml-20 lg:mr-0 pt-12 md:pt-0 lg:pt-0 mt-12 md:mt-0 lg:mt-0 flex justify-end sm:block">
                    <div class="sm:pl-20 md:pl-0 xl:pl-20 pt-10 pl-6 sm:pl-0">
                        <img class="relative z-10 shadow-md w-full"
                             src="https://images.unsplash.com/photo-1514448292272-31510d2cfca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40"
                             alt="Coffee" />
                    </div>
                </div>
            </div>
        </section>
    `
    return template
}

export default Header;