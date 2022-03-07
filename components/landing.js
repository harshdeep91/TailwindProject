
const Landing = () => {
  return (
      <div>
          <nav className=" px-4 sm:px-11 py-4 bg-purple-900 text-white flex justify-between text-base sm:text-2xl">
          <img src="https://cdn.pixabay.com/photo/2019/02/28/19/35/st-patricks-day-smiley-4026658_960_720.png" alt="logo" className="h-14 w-14"/>
              <ul className="flex sm:space-x-11 space-x-4 md:pr-10 py-4 justify-end">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Catalogue</li>
                    <li className="cursor-pointer">Contact</li>
              </ul>
          </nav>
     <main className="bg-fuchsia-100 flex sm:justify-around flex-col-reverse sm:flex-row " >
              <div className=" py-40 pl-9 flex flex-col flex-wrap">
                  <div className="text-6xl">
                   Brand Builders
                  </div>
    <p className=" text-gray-500 py-3 mr-5 sm:mr-0 text-sm break-normal" >We can help you to get your buisness to  sky high.We are here to guide your how to build your brand.Contact Us for More info </p>
                  <div className=" button my-4">
                      <button className=" bg-purple-800 mx-2 px-3 py-3 rounded-2xl text-white hover:bg-slate-900 active:bg-amber-400 hover:shadow-xl hover:shadow-red-500/40">Buy Now</button>
                      <button className=" bg-purple-800 mx-2 px-3 py-3 rounded-2xl text-white hover:bg-slate-900 active:bg-amber-400 hover:shadow-xl hover:shadow-red-500/40">Contact Us</button>
                  </div>
              </div>
              <div className="flex items-center">
                  <img className=" object-cover hidden sm:block"
                      src="/static/caller.png" alt="" />
                  <img className=" object-cover sm:hidden mt-32"
                      src="/static/caller2.png" alt="" />
              </div>
    </main>
    </div>
  )
}

export default Landing