
const Landing = () => {
  return (
      <div>
          <nav className="px-11 py-4 bg-purple-900 text-white flex justify-between">
          <img src="https://cdn.pixabay.com/photo/2019/02/28/19/35/st-patricks-day-smiley-4026658_960_720.png" alt="logo" className="h-14 w-14"/>
              <ul className="flex space-x-11 pr-10 py-4 justify-end">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Catalogue</li>
                    <li className="cursor-pointer">Contact</li>
              </ul>
          </nav>
     <main className="bg-fuchsia-100 flex" >
              <div className=" py-40 pl-9 flex flex-col flex-wrap">
                  <div className="text-6xl">
                  This is blue text
                  </div>
    <p className=" text-gray-500 py-3 text-sm break-all" >loremgiohudjflkghdflkjghdsflkgfhdsfljvnbxzcmvndxzlkjhgidfhgaiuerydfgssssssssssssgdfddsfdssfsadfsdafdsfsdfsdfdsadsgdsljfhgfilhfh</p>
                  <div className=" button my-4">
                      <button className=" bg-purple-800 mx-2 px-3 py-3 rounded-2xl text-white hover:bg-slate-900">Buy Now</button>
                      <button className=" bg-purple-800 mx-2 px-3 py-3 rounded-2xl text-white hover:bg-slate-900">Contact Us</button>
                  </div>
              </div>
              <div className="flex items-center">
                  <img className=" object-cover"
                          src="/static/caller.png" alt="" />
              </div>
    </main>
    </div>
  )
}

export default Landing