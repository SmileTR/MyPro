	
	//鼠标移入左边导航显示对应详细内容
	var bannerLeft = document.getElementById("banner_left");
	var bannerLeft_li = bannerLeft.getElementsByTagName("li");
	var left_content = document.getElementsByClassName("left_content");
	// var flag = true;

	
	//鼠标移入左边导航显示对应内容页
	for(var i = 0;i < bannerLeft_li.length;i++){

		(function(j){

			bannerLeft_li[i].onmouseover = function showLeftContent(){

				

					for(var k = 0;k < bannerLeft_li.length;k++){
					left_content[k].className = "left_content";
				}

				left_content[j].className = "left_content index2";
				
				//鼠标在内容页，仍然显示	
				left_content[j].onmouseover = function(){

					showLeftContent();

				}

				//鼠标移出内容页隐藏内容页
				left_content[j].onmouseout = function(){

					for(var i = 0;i < bannerLeft_li.length;i++){

						left_content[i].className = "left_content";

					}

				}

			}

			

		})(i);

	}

	//鼠标移出左边导航，隐藏内容页
	bannerLeft.onmouseout = function hideLeftContent(){

		for(var i = 0;i < bannerLeft_li.length;i++){

			left_content[i].className = "left_content";

		}

	}


	//轮播图
	var bannerRight = document.getElementById("banner_right");
	var bannerImg = bannerRight.getElementsByTagName("img");
	var bannerButton = document.getElementById("banner_button");
	var bannerButton_li = bannerButton.children;
	var imgCount = 0;
	var leftButton = document.getElementById("left_button");
	var rightButton = document.getElementById("right_button");

	//切换到下张图片
	function nextImg(){

		for(var i = 0;i < bannerButton_li.length;i++){

			bannerImg[i].className = "";
			bannerButton_li[i].className = "";


		}

		imgCount++;

		if(imgCount >= 8){
			imgCount = 0;
		}

		bannerImg[imgCount].className = "index1";
		bannerButton_li[imgCount].className = "active";		

	}

	function previousImg(){

		for(var i = 0;i < bannerButton_li.length;i++){

			bannerImg[i].className = "";
			bannerButton_li[i].className = "";

		}

		imgCount--;

		if(imgCount < 0){
				imgCount = 7;
			}

		bannerImg[imgCount].className = "index1";
		bannerButton_li[imgCount].className = "active";

	}

	leftButton.addEventListener("click",previousImg,false);
	rightButton.addEventListener("click",nextImg,false);

	var bannerInterval;
	//轮播图定时播放
	function lb(){

		//轮播图定时播放
	 bannerInterval = setInterval(function(){

		nextImg();

	},3000)

	}

	//开始轮播图
	lb();

	//鼠标移入轮播图上，停止轮播
	bannerRight.onmouseover = function(){

		clearInterval(bannerInterval);


	}
	
	//鼠标移出轮播图上，开始轮播
	bannerRight.onmouseout = function(){

		lb();	

	}

	//鼠标移入轮播图对应li，显示对应图片
	function changeImg(){

		for(var i = 0;i < bannerButton_li.length;i++){

			bannerButton_li[i].setAttribute("liCount", i);

			bannerButton_li[i].onmouseover = function(){

				var j = this.getAttribute("liCount");
				for(var i = 0;i < bannerButton_li.length;i++){

					bannerImg[i].className = "";
					bannerButton_li[i].className = "";

				}	
				bannerImg[j].className = "index1";

			}

		}
	}

	changeImg();
	
		
				
			


			

		

	


	

