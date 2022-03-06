const Landing = () => {
  return (
      <div>
          <nav class="px-11 py-4 bg-purple-900 text-white flex justify-between">
          <img src="https://cdn.pixabay.com/photo/2019/02/28/19/35/st-patricks-day-smiley-4026658_960_720.png" alt="logo" className="h-14 w-14"/>
              <ul class="flex space-x-11 pr-10 py-4 justify-end">
                    <li class="cursor-pointer">Home</li>
                    <li class="cursor-pointer">About</li>
                    <li class="cursor-pointer">Catalogue</li>
                    <li class="cursor-pointer">Contact</li>
              </ul>
          </nav>
    <div class="container">
        <h1 class="text-blue-900 my-12">
            This is blue text
        </h1>
    </div>
    </div>
  )
}

export default Landing