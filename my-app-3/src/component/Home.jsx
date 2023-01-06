import "./Home.css";
export default function Home() {
  return (
	<div>
		<div id="body_content">
			<div>
				<hr class = "line"></hr>
				<div id="profile_pic">
					{/* profile Image */}
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyr-guOND_DzAmtWfqj-HbF-2wK7g0Z2zOA&usqp=CAU cente" alt="Trulli" class="center" />
					{/* Name under the profile pic */}
					<h3 id="user_name">Amir Adamov</h3>
				</div>
				<div id="body_text">
					<p><b>Age</b><span id="bar1"></span>22</p>
					<p><b>Phone</b><span id="bar2"></span>+994515042506</p>
					<p><b>Email</b><span id="bar3"></span>amir@adamov.net.ru</p>
					<p><b>Education</b><span id="bar4"></span>Computer Scientist</p>
					<br />
					<div class="container">
						<div class="box">PHP</div>
						<div class="box">Laravel</div>
						<div class="box">Python</div>
						<div class="box">HTML5/CSS3</div>
					</div>
					<br />
				</div>
			</div>
					
					<hr class = "line"></hr>
					<div class="abut_me">
			<h2 class="info">About</h2>
			{/* About Information */}
			<p class="info">I am Computer Scientist Student at ADA University. I mainly program on php. Besides being a student I am a son, husb... just a son.
			</p>
			<br />
			<h2 class="info">Insterests</h2>
			{/* Interests Information */}
			<p class="info">Trying new things out. Cooking. Eating. Drawing. And there some of the codding...</p>
			<br />
			<hr class = "line"></hr>

			<h2 class="info">My Projects</h2>
			<ul id="projects">
				<br />
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href="https://github.com/amiradamov/My_web"><h4>Personal Website</h4></a>
						{/* desciption */}
						<p className="sub_info">Create personal website with digital card in it.</p>
					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href="https://github.com/amiradamov/Rock-Paper-Scissors-game"><h4>Rock, Paper, Scissors game</h4></a>
						{/* desciption */}
						<p className="sub_info">Create a simple Rock, Paper, Scissors game</p>
						<p className="sub_info">There are two players (for now each is a computer).</p>
						<p className="sub_info">Create two div elements where you will show the move of each player.</p>
						<p className="sub_info">When the page is loaded, the div on the left is going to show the move of the first player (chosen randomly out of Rock, Paper, or Scissor) and the div on the right will do the sam</p>
						<p className="sub_info">If the first player wins, show a message “Player 1 wins”, if the second one wins, show a message “Player 2 wins”, otherwise show a message “A Draw”.</p>

					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a href="https://github.com/amiradamov/weather_js" className="gitlin"><h4 >Weather app</h4></a>
						{/* desciption */}
						<p className="sub_info">Enter name of the city manually</p>
						<p className="sub_info">Enter latitude and longitude manually</p>
						<p className="sub_info">Enter current geolocation using Geolocation API</p>
						<p className="sub_info">Shows weather of given coordinates or the city</p>
					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href=""><h4>Movie Ranking</h4></a>
						{/* desciption */}
						<p className="sub_info">There are 1000 movies in the provided file. Therefore, sending a request to http://localhost:3000/movies would respond a list of 1000 movies.</p>
						<p className="sub_info">For each movie it should display information given in json file</p>
						<p className="sub_info">Whenever one of these Movie Items of the Movies List is clicked, it should bring to the user a detailed Movie Info page (another page) where all the information available for the currently selected movie is shown.</p>
					</div>
				</li>
				<br />
			</ul>
			<br />
			<br />
			
		</div>




		{/* template */}
		<div>
				<hr class = "line"></hr>
				<div id="profile_pic">
					{/* profile Image */}
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyr-guOND_DzAmtWfqj-HbF-2wK7g0Z2zOA&usqp=CAU cente" alt="Trulli" class="center" />
					{/* Name under the profile pic */}
					<h3 id="user_name">Gulnara Azizova</h3>
				</div>
				<div id="body_text">
					<p><b>Age</b><span id="bar1"></span>21</p>
					<p><b>Phone</b><span id="bar2"></span>+994517381733</p>
					<p><b>Email</b><span id="bar3"></span>gazizova12047@ada.edu.az</p>
					<p><b>Education</b><span id="bar4"></span>Information Technology</p>
					<br />
					<div class="container">
						<div class="box">HTML5/CSS3</div>
						<div class="box">JavaScript</div>
						<div class="box">Java</div>
						<div class="box">SQL/PostgreSQL</div>
					</div>
					<br />
				</div>
			</div>
			<hr class = "line"></hr>
					<div class="abut_me">
			<h2 class="info">About</h2>
			{/* About Information */}
			<p class="info">I am a junior IT student at ADA University. My favourite programming language is Java. Currently,I am learning Android Studio to create intriguing mobile apps. When I have free time, I take various photos randomly captured my attention and enjoy designing them in Canva. My main aim in the future is to be a professional Android Developer.
			</p>
			<br />
			<h2 class="info">Insterests</h2>
			{/* Interests Information */}
			<p class="info">Photography. Designing. Working on planned projects.</p>
			<br />
			<hr class = "line"></hr>

			<h2 class="info">My Projects</h2>
			<ul id="projects">
				<br />
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href="https://github.com/gazizovaa/gazizovaa.github.io"><h4>Personal Website</h4></a>
						{/* desciption */}
						<p className="sub_info">Create personal website with containing digital card.</p>
					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href="https://github.com/gazizovaa/TheCounterApp"><h4>The Counter App</h4></a>
						{/* desciption */}
						<p className="sub_info">Creating a simple Counter Mobile App</p>
						<p className="sub_info">This app is used for counting the things at once a time.</p>
                                                <p className="sub_info">App based on 4 steps, including Layout Design, Declaring Widgets, Functions, Run & Testing.</p>
						<p className="sub_info">Write the codes inside main activity to click a button by function called btn.setOnClickListener on the app.</p>
						<p className="sub_info">Create a method called increaseCounter() outside of OnCreate method that increases the counter variable by pre increment. Finally, called it inside of onClick() method using setText().</p>

					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a href="https://github.com/gazizovaa/W-app" className="gitlin"><h4 >Weather app</h4></a>
						{/* desciption */}
						<p className="sub_info">Enter name of the city manually</p>
						<p className="sub_info">Enter latitude and longitude manually</p>
						<p className="sub_info">Enter current geolocation using Geolocation API</p>
						<p className="sub_info">Shows weather of given coordinates or the city</p>
					</div>
				</li>
				<li>
					<div>
						{/* Name of the project and the link to github */}
						<a className="gitlin" href="https://github.com/gazizovaa/react-app"><h4>Movie Ranking</h4></a>
						{/* desciption */}
						<p className="sub_info">There are 1000 movies in the provided file. Therefore, sending a request to http://localhost:3000/movies would respond a list of 1000 movies.</p>
						<p className="sub_info">For each movie it should display information given in json file</p>
						<p className="sub_info">Whenever one of these Movie Items of the Movies List is clicked, it should bring to the user a detailed Movie Info page (another page) where all the information available for the currently selected movie is shown.</p>
					</div>
				</li>
				<br />
			</ul>
			<br />
			<br />
			
		</div>

		</div>
	</div>
  );
}
